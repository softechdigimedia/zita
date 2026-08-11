import type{ LocationItem, CoverageZone } from '../types';
import { MOCK_LOCATIONS, MOCK_COVERAGE_ZONES } from '../data/mockData';

export interface GeolocationResult {
  lat: number;
  lng: number;
  accuracyMeters?: number;
}

export function calculateDistanceKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Radius of the Earth in km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  return Math.round(distance * 10) / 10;
}

export function getUserGeolocation(): Promise<GeolocationResult> {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported by your browser.'));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          accuracyMeters: position.coords.accuracy
        });
      },
      (error) => {
        let msg = 'Failed to get current location.';
        if (error.code === error.PERMISSION_DENIED) {
          msg = 'Location access was denied. You can search your address manually.';
        } else if (error.code === error.POSITION_UNAVAILABLE) {
          msg = 'Location information is currently unavailable.';
        } else if (error.code === error.TIMEOUT) {
          msg = 'The request to get user location timed out.';
        }
        reject(new Error(msg));
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000
      }
    );
  });
}

export function getNearbyLocations(userLat: number, userLng: number, filterType?: string): LocationItem[] {
  let list = MOCK_LOCATIONS.map((loc) => {
    const dist = calculateDistanceKm(userLat, userLng, loc.latitude, loc.longitude);
    return { ...loc, distanceKm: dist };
  });

  if (filterType && filterType !== 'ALL') {
    list = list.filter((l) => l.type === filterType);
  }

  list.sort((a, b) => (a.distanceKm || 0) - (b.distanceKm || 0));
  return list;
}

// Simulated Geocoder for common West Bengal & Indian cities/neighborhoods
const KNOWN_GEO_PRESETS: Record<string, { lat: number; lng: number; formattedAddress: string }> = {
  'kolkata': { lat: 22.5726, lng: 88.3639, formattedAddress: 'Kolkata, West Bengal, India' },
  'salt lake': { lat: 22.5726, lng: 88.4325, formattedAddress: 'Salt Lake Sector V, Bidhannagar, Kolkata' },
  'new town': { lat: 22.6231, lng: 88.4682, formattedAddress: 'New Town Rajarhat, Action Area 1, Kolkata' },
  'park street': { lat: 22.5532, lng: 88.3512, formattedAddress: 'Park Street, Chowringhee, Kolkata' },
  'howrah': { lat: 22.5851, lng: 88.3418, formattedAddress: 'Howrah Junction & Station Area, Howrah' },
  'barrackpore': { lat: 22.7620, lng: 88.3710, formattedAddress: 'Barrackpore, North 24 Parganas' },
  'barasat': { lat: 22.7210, lng: 88.4810, formattedAddress: 'Barasat Champadali More, North 24 Parganas' },
  'dum dum': { lat: 22.6220, lng: 88.3990, formattedAddress: 'Dum Dum Station Area, Kolkata' },
  'behala': { lat: 22.4988, lng: 88.3012, formattedAddress: 'Behala Chowrasta, South Kolkata' },
  'serampore': { lat: 22.7520, lng: 88.3420, formattedAddress: 'Serampore, Hooghly District' },
  'dankuni': { lat: 22.6850, lng: 88.2910, formattedAddress: 'Dankuni Industrial Zone, Hooghly' },
  'durgapur': { lat: 23.5204, lng: 87.3119, formattedAddress: 'Durgapur Steel City, Paschim Bardhaman' },
  'siliguri': { lat: 26.7271, lng: 88.3953, formattedAddress: 'Siliguri Commercial Hub, Darjeeling' },
  'asansol': { lat: 23.6889, lng: 86.9661, formattedAddress: 'Asansol Metro Region, West Bengal' }
};

export async function geocodeSearchAddress(query: string): Promise<{ lat: number; lng: number; formattedAddress: string } | null> {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return null;

  for (const [key, coords] of Object.entries(KNOWN_GEO_PRESETS)) {
    if (normalized.includes(key) || key.includes(normalized)) {
      return coords;
    }
  }

  // Pincode checks for Kolkata region (700001 - 700160)
  if (/^700\d{3}$/.test(normalized)) {
    return {
      lat: 22.5726 + (Math.random() - 0.5) * 0.08,
      lng: 88.3639 + (Math.random() - 0.5) * 0.08,
      formattedAddress: `PIN ${query}, Kolkata Region, West Bengal`
    };
  }

  // Default fallback centering on Kolkata core with slight offset
  return {
    lat: 22.5726 + (Math.random() - 0.5) * 0.04,
    lng: 88.3639 + (Math.random() - 0.5) * 0.04,
    formattedAddress: `${query}, West Bengal, India`
  };
}

export function checkServiceAvailability(lat: number, lng: number, pincode?: string) {
  // Check against coverage zone radius
  for (const zone of MOCK_COVERAGE_ZONES) {
    const distKm = calculateDistanceKm(lat, lng, zone.centerLat, zone.centerLng);
    const radiusKm = zone.radiusMeters / 1000;
    if (distKm <= radiusKm) {
      return {
        status: zone.status,
        zoneName: zone.name,
        estimatedSpeed: 'Up to 1000 Mbps',
        installationTime: 'Same Day / 24 Hours',
        message: 'Great news! ZITA Giga-Fiber is fully active in your location.'
      };
    }
  }

  if (pincode && pincode.startsWith('700')) {
    return {
      status: 'AVAILABLE' as const,
      zoneName: 'Kolkata Metropolitan Fiber Grid',
      estimatedSpeed: 'Up to 1000 Mbps',
      installationTime: 'Within 24 Hours',
      message: 'ZITA High-Speed Optic Fiber is available at your PIN code.'
    };
  }

  return {
    status: 'LIMITED_COVERAGE' as const,
    zoneName: 'Expansion Zone',
    estimatedSpeed: 'Up to 200 Mbps',
    installationTime: '3-5 Working Days',
    message: 'ZITA is currently expanding network nodes near your area. Submit a request to prioritize your building!'
  };
}

export function getDirectionsUrl(lat: number, lng: number, label: string): string {
  const encodedLabel = encodeURIComponent(label);
  // Opens Google Maps Navigation in new tab
  return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&destination_place_id=${encodedLabel}`;
}
