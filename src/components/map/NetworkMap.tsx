import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import type{ LocationItem, } from '../../types';
import { MOCK_LOCATIONS, MOCK_COVERAGE_ZONES } from '../../data/mockData';
import { getUserGeolocation, getNearbyLocations, geocodeSearchAddress, getDirectionsUrl } from '../../services/locationService';
import { MapPin, Navigation, Search, ExternalLink,  ShieldAlert, Sparkles, Filter } from 'lucide-react';

interface NetworkMapProps {
  onSelectLocation?: (loc: LocationItem) => void;
  onCheckAvailabilityAtCoords?: (lat: number, lng: number, address: string) => void;
  selectedLocationId?: string;
}

export const NetworkMap: React.FC<NetworkMapProps> = ({
  onSelectLocation,
  onCheckAvailabilityAtCoords,
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<{ [key: string]: L.Marker }>({});
  const userMarkerRef = useRef<L.Marker | null>(null);

  const [filterType, setFilterType] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [userCoords, setUserCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [isLocating, setIsLocating] = useState(false);
  const [locationError, setLocationError] = useState<string | null>(null);
  const [activeLoc, setActiveLoc] = useState<LocationItem | null>(MOCK_LOCATIONS[0]);
  const [locationsList, setLocationsList] = useState<LocationItem[]>(MOCK_LOCATIONS);

  // Initialize Leaflet Map
  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove();
      mapInstanceRef.current = null;
    }

    // Center map around Kolkata North/East (Dunlop, Baguiati, Keshtopur area)
    const initialLat = 22.6250;
    const initialLng = 88.4050;

    const map = L.map(mapContainerRef.current, {
      center: [initialLat, initialLng],
      zoom: 13,
      zoomControl: false
    });

    // Add Standard OpenStreetMap tile layer (exact match for screenshot styling)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19
    }).addTo(map);

    // Zoom control on top right
    L.control.zoom({ position: 'topright' }).addTo(map);

    mapInstanceRef.current = map;

    // Render Coverage Circles
    MOCK_COVERAGE_ZONES.forEach((zone) => {
      L.circle([zone.centerLat, zone.centerLng], {
        color: zone.color,
        fillColor: zone.color,
        fillOpacity: 0.12,
        radius: zone.radiusMeters,
        weight: 1.5,
        dashArray: '4, 8'
      }).addTo(map);
    });

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // Function to create custom SVG markers for ZITA & Map Items
  const createZitaIcon = (loc: LocationItem) => {
    // 1. Dunlop / Core ZITA POP Node (ZITA Brand Badge)
    if (loc.id === 'loc-dunlop' || loc.type === 'OFFICE') {
      const html = `
        <div style="
          background: #00113d;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 14px rgba(0,0,0,0.5);
          border: 3px solid #dc2626;
          color: #ffffff;
          font-weight: 900;
          font-size: 13px;
          letter-spacing: -0.5px;
          cursor: pointer;
        ">
          <span style="color: #ffffff; font-weight: 900; line-height: 1; text-shadow: 0 1px 2px rgba(0,0,0,0.8);">ZITA</span>
        </div>
      `;
      return L.divIcon({
        html,
        className: 'custom-zita-logo-marker',
        iconSize: [44, 44],
        iconAnchor: [22, 22]
      });
    }

    // 2. Visitor Node (itachi uchiha) - Yellow Pin with Person Icon
    if (loc.id === 'loc-visitor-itachi') {
      const html = `
        <div style="
          background-color: #eab308;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0,0,0,0.35);
          border: 2px solid #ffffff;
          color: #ffffff;
          cursor: pointer;
        ">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
        </div>
      `;
      return L.divIcon({
        html,
        className: 'custom-visitor-marker',
        iconSize: [34, 34],
        iconAnchor: [17, 17]
      });
    }

    // 3. Keshtopur Red Pin with Person Icon
    if (loc.id === 'loc-keshtopur') {
      const html = `
        <div style="
          background-color: #dc2626;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0,0,0,0.35);
          border: 2px solid #ffffff;
          color: #ffffff;
          cursor: pointer;
        ">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
        </div>
      `;
      return L.divIcon({
        html,
        className: 'custom-keshtopur-marker',
        iconSize: [34, 34],
        iconAnchor: [17, 17]
      });
    }

    // Default Fallback Marker
    let bgColor = '#FFD000';
    let iconSymbol = '📍';

    if (loc.type === 'NETWORK_NODE') {
      bgColor = '#ff0088';
      iconSymbol = '⚡';
    } else if (loc.type === 'LCO') {
      bgColor = '#059669';
      iconSymbol = '🔌';
    }

    const html = `
      <div style="
        background-color: ${bgColor};
        width: 32px;
        height: 32px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 12px rgba(0,0,0,0.4);
        border: 2px solid #ffffff;
        color: ${loc.type === 'RETAIL' ? '#18181b' : '#ffffff'};
        font-weight: bold;
        font-size: 14px;
        cursor: pointer;
      ">
        ${iconSymbol}
      </div>
    `;

    return L.divIcon({
      html,
      className: 'custom-zita-marker',
      iconSize: [32, 32],
      iconAnchor: [16, 16]
    });
  };

  // Update Markers when locations or filter changes
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    // Clear existing markers
    Object.values(markersRef.current).forEach((m: any) => m.remove());
    markersRef.current = {};

    const filtered = locationsList.filter((loc) => {
      if (filterType === 'ALL') return true;
      return loc.type === filterType;
    });

    filtered.forEach((loc) => {
      const icon = createZitaIcon(loc);
      const marker = L.marker([loc.latitude, loc.longitude], { icon }).addTo(map);

      let popupContent = `
        <div style="font-family: system-ui, sans-serif; padding: 4px; min-width: 200px;">
          <div style="font-weight: bold; color: #00113D; font-size: 14px; margin-bottom: 4px;">${loc.name}</div>
          <div style="font-size: 12px; color: #475569; margin-bottom: 6px;">${loc.address}</div>
          <div style="font-size: 11px; color: #059669; font-weight: 600; margin-bottom: 8px;">
            ${loc.type === 'OFFICE' ? 'Headquarters' : loc.type === 'RETAIL' ? 'Retail Store' : 'Fiber Network Node'}
          </div>
          <div style="display: flex; gap: 6px;">
            <a href="${getDirectionsUrl(loc.latitude, loc.longitude, loc.name)}" target="_blank" rel="noopener noreferrer" style="
              background-color: #001A57;
              color: white;
              padding: 6px 10px;
              border-radius: 6px;
              text-decoration: none;
              font-size: 11px;
              font-weight: 600;
              display: inline-block;
            ">Get Directions</a>
          </div>
        </div>
      `;

      // Special clean popup for itachi uchiha visitor (matching screenshot exactly)
      if (loc.id === 'loc-visitor-itachi') {
        popupContent = `
          <div style="font-family: system-ui, -apple-system, sans-serif; padding: 2px 4px; min-width: 120px;">
            <div style="font-weight: 700; color: #0f172a; font-size: 14px; line-height: 1.2;">itachi uchiha</div>
            <div style="font-size: 12px; color: #475569; margin-top: 2px;">Visitor</div>
          </div>
        `;
      }

      marker.bindPopup(popupContent, {
        autoClose: false,
        closeOnClick: false
      });

      marker.on('click', () => {
        setActiveLoc(loc);
        if (onSelectLocation) onSelectLocation(loc);
      });

      markersRef.current[loc.id] = marker;

      // Auto-open visitor marker popup like in the screenshot
      if (loc.id === 'loc-visitor-itachi') {
        setTimeout(() => {
          marker.openPopup();
        }, 300);
      }
    });
  }, [locationsList, filterType]);

  // Handle GPS "Use My Location"
  const handleUseMyLocation = async () => {
    setIsLocating(true);
    setLocationError(null);

    try {
      const res = await getUserGeolocation();
      setUserCoords({ lat: res.lat, lng: res.lng });

      const map = mapInstanceRef.current;
      if (map) {
        map.flyTo([res.lat, res.lng], 14, { duration: 1.5 });

        // Add/Update user marker
        if (userMarkerRef.current) {
          userMarkerRef.current.remove();
        }

        const userIcon = L.divIcon({
          html: `
            <div style="
              background-color: #ffd000;
              width: 22px;
              height: 22px;
              border-radius: 50%;
              border: 3px solid #18181b;
              box-shadow: 0 0 0 8px rgba(255, 208, 0, 0.4);
            "></div>
          `,
          className: 'user-pin-marker',
          iconSize: [22, 22],
          iconAnchor: [11, 11]
        });

        const uMarker = L.marker([res.lat, res.lng], { icon: userIcon }).addTo(map);
        uMarker.bindPopup('<b>Your Current Location</b>').openPopup();
        userMarkerRef.current = uMarker;
      }

      // Re-sort nearby locations by distance
      const nearby = getNearbyLocations(res.lat, res.lng, filterType);
      setLocationsList(nearby);
      if (nearby.length > 0) {
        setActiveLoc(nearby[0]);
      }

      if (onCheckAvailabilityAtCoords) {
        onCheckAvailabilityAtCoords(res.lat, res.lng, 'Current User Location');
      }
    } catch (err: any) {
      setLocationError(err.message || 'Unable to access your location.');
    } finally {
      setIsLocating(false);
    }
  };

  // Handle Manual Search
  const handleSearchSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setIsLocating(true);
    setLocationError(null);

    const geocoded = await geocodeSearchAddress(searchQuery);
    setIsLocating(false);

    if (geocoded) {
      const map = mapInstanceRef.current;
      if (map) {
        map.flyTo([geocoded.lat, geocoded.lng], 13, { duration: 1.2 });
      }

      const nearby = getNearbyLocations(geocoded.lat, geocoded.lng, filterType);
      setLocationsList(nearby);
      if (nearby.length > 0) {
        setActiveLoc(nearby[0]);
      }

      if (onCheckAvailabilityAtCoords) {
        onCheckAvailabilityAtCoords(geocoded.lat, geocoded.lng, geocoded.formattedAddress);
      }
    } else {
      setLocationError('Location not found. Try searching Kolkata, Salt Lake, New Town, or Howrah.');
    }
  };

  const handleSelectCard = (loc: LocationItem) => {
    setActiveLoc(loc);
    if (onSelectLocation) onSelectLocation(loc);

    const map = mapInstanceRef.current;
    if (map) {
      map.flyTo([loc.latitude, loc.longitude], 15, { duration: 1 });
      const marker = markersRef.current[loc.id];
      if (marker) marker.openPopup();
    }
  };

  return (
    <div className="w-full bg-slate-900 text-white rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
      {/* Top Map Control Bar */}
      <div className="p-4 sm:p-6 bg-zinc-900 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 border-b border-zinc-700/80">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/20 border border-yellow-400/40 text-yellow-400 text-xs font-bold uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
            Live Network Presence
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            ZITA Optic Fiber Coverage & Active Network Map
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Interactive network map across Kolkata, Howrah, Hooghly & North 24 Parganas.
          </p>
        </div>

        {/* Search & GPS Controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
          <form onSubmit={handleSearchSubmit} className="relative flex-1 sm:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search area or PIN (e.g. Salt Lake, 700091)"
              className="w-full bg-zinc-800 text-white placeholder-slate-400 text-xs sm:text-sm pl-9 pr-3 py-2.5 rounded-xl border border-zinc-700 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          </form>

          <button
            type="button"
            onClick={handleUseMyLocation}
            disabled={isLocating}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-yellow-400 hover:bg-yellow-300 text-zinc-950 font-black text-xs sm:text-sm rounded-xl transition shadow-lg shadow-yellow-400/20 disabled:opacity-50 whitespace-nowrap"
          >
            <Navigation className={`w-4 h-4 ${isLocating ? 'animate-spin' : ''}`} />
            {isLocating ? 'Locating...' : 'Use My Location'}
          </button>
        </div>
      </div>

      {/* Location Error Notice */}
      {locationError && (
        <div className="bg-amber-500/15 border-b border-amber-500/30 px-4 py-2.5 text-xs text-amber-300 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />
            <span>{locationError}</span>
          </div>
          <button onClick={() => setLocationError(null)} className="text-amber-300 font-bold hover:underline ml-2">
            Dismiss
          </button>
        </div>
      )}

      {/* Realtime User Geolocation Telemetry Card */}
      {userCoords && (
        <div className="bg-zinc-950 border-b border-zinc-800 p-4 sm:px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-white">
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-yellow-400/20 border border-yellow-400/50 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-40"></span>
              <Navigation className="w-5 h-5 text-yellow-400 relative z-10" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-sm text-yellow-400">Live GPS Location Detected</span>
                <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[10px] font-bold rounded-full uppercase">
                  Coverage Confirmed
                </span>
              </div>
              <p className="text-slate-300 text-[11px] font-mono mt-0.5">
                Lat: <strong className="text-white">{userCoords.lat.toFixed(4)}° N</strong> | Lng: <strong className="text-white">{userCoords.lng.toFixed(4)}° E</strong> | Ping: <strong className="text-emerald-400">~2ms</strong>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end border-t md:border-t-0 border-zinc-800 pt-2 md:pt-0">
            <div className="text-right">
              <span className="text-[10px] uppercase text-slate-400 block font-semibold">Nearest Fiber POP Node</span>
              <span className="text-xs font-black text-white font-mono">
                {locationsList.length > 0 && locationsList[0].distanceKm !== undefined ? `${locationsList[0].distanceKm} km away` : '0.8 km (Salt Lake V)'}
              </span>
            </div>
            <button
              onClick={() => {
                if (onCheckAvailabilityAtCoords) {
                  onCheckAvailabilityAtCoords(userCoords.lat, userCoords.lng, 'Current Location');
                }
              }}
              className="px-3.5 py-2 bg-yellow-400 hover:bg-yellow-300 text-zinc-950 font-black text-xs rounded-xl transition shadow"
            >
              Check Feasibility Here
            </button>
          </div>
        </div>
      )}

      {/* Filter Tabs */}
      <div className="bg-zinc-900 px-4 py-3 border-b border-zinc-800 flex items-center gap-2 overflow-x-auto no-scrollbar">
        <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider flex items-center gap-1 shrink-0 mr-1">
          <Filter className="w-3.5 h-3.5" /> Filter:
        </span>
        {[
          { id: 'ALL', label: 'All Locations' },
          { id: 'OFFICE', label: 'ZITA HQ & Offices' },
          { id: 'RETAIL', label: 'Retail Stores' },
          { id: 'NETWORK_NODE', label: 'Network Nodes' },
          { id: 'LCO', label: 'LCO Partners' }
        ].map((f) => (
          <button
            key={f.id}
            onClick={() => setFilterType(f.id)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition ${
              filterType === f.id
                ? 'bg-yellow-400 text-zinc-950 font-black shadow'
                : 'bg-zinc-800 text-slate-300 hover:bg-zinc-700'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Split Map & Location List Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[480px] lg:min-h-[560px]">
        {/* Left Side: Interactive Location Cards List */}
        <div className="lg:col-span-5 xl:col-span-4 bg-zinc-950 p-4 border-r border-zinc-800 max-h-[360px] lg:max-h-[560px] overflow-y-auto space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-400 font-bold uppercase tracking-wider pb-1">
            <span>{locationsList.length} Network Touchpoints</span>
            {userCoords && <span className="text-emerald-400">Sorted by Distance</span>}
          </div>

          {locationsList.length === 0 ? (
            <div className="p-8 text-center text-slate-400 text-sm">
              No ZITA locations match the selected filter.
            </div>
          ) : (
            locationsList.map((loc) => {
              const isSelected = activeLoc?.id === loc.id;
              return (
                <div
                  key={loc.id}
                  onClick={() => handleSelectCard(loc)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-zinc-800/90 border-yellow-400 shadow-lg ring-1 ring-yellow-400/50'
                      : 'bg-zinc-900/60 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800/50'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <span className="font-bold text-sm text-white hover:text-yellow-400 transition">
                      {loc.name}
                    </span>
                    <span
                      className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full shrink-0 ${
                        loc.type === 'OFFICE'
                          ? 'bg-amber-400/20 text-amber-300 border border-amber-400/40'
                          : loc.type === 'NETWORK_NODE'
                          ? 'bg-magenta-glow text-pink-300 border border-pink-500/40'
                          : 'bg-yellow-400/20 text-yellow-300 border border-yellow-400/40'
                      }`}
                    >
                      {loc.type === 'OFFICE' ? 'HQ' : loc.type === 'NETWORK_NODE' ? 'Node' : loc.type}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 mb-2.5 line-clamp-2">{loc.address}</p>

                  <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-zinc-800/80">
                    <span className="flex items-center gap-1 font-mono text-emerald-400">
                      <MapPin className="w-3 h-3 text-emerald-400" />
                      {loc.distanceKm !== undefined ? `${loc.distanceKm} km away` : loc.city}
                    </span>

                    <a
                      href={getDirectionsUrl(loc.latitude, loc.longitude, loc.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 text-yellow-400 font-bold hover:underline"
                    >
                      Directions <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Right Side: Leaflet Interactive Map Canvas */}
        <div className="lg:col-span-7 xl:col-span-8 relative min-h-[380px] lg:min-h-full">
          <div ref={mapContainerRef} className="w-full h-full min-h-[380px] lg:min-h-[560px]" />

          {/* Map Overlay Quick Legend */}
          <div className="absolute bottom-4 left-4 z-[500] bg-zinc-900/90 backdrop-blur border border-zinc-700/70 rounded-xl p-3 text-xs text-slate-200 shadow-xl hidden sm:block">
            <div className="font-bold text-white mb-2 text-[11px] uppercase tracking-wider">Map Legend</div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-[11px]">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#27272a] border border-white"></span>
                <span>ZITA Office / HQ</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#FFD000] border border-white"></span>
                <span>Retail Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#FF0088] border border-white"></span>
                <span>Network Node</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#059669] border border-white"></span>
                <span>LCO Partner</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
