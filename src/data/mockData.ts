import type{ LocationItem, CoverageZone, Plan, ServiceItem, ProductItem, OfferItem, ChannelItem, OTTAppItem, FAQItem } from '../types';

export const ZITA_OFFICE_HEADQUARTERS = {
  name: 'ZITA Telecom Head Office',
  address: 'Salt Lake Sector V, Module 102, Webel Tower I, Salt Lake City, Kolkata - 700091',
  phone: '+91 33 4088 9000',
  supportHotline: '1800 120 9482',
  email: 'support@zitatelecom.in',
  corporateEmail: 'enterprise@zitatelecom.in',
  whatsappNumber: '919830012345',
  lat: 22.5726,
  lng: 88.4325,
  businessHours: 'Mon - Sat: 9:00 AM - 8:00 PM | 24/7 NOC Support'
};

export const MOCK_LOCATIONS: LocationItem[] = [
  {
    id: 'loc-1',
    name: 'ZITA Telecom Corporate HQ',
    type: 'OFFICE',
    latitude: 22.5726,
    longitude: 88.4325,
    address: 'Webel Tower I, Sector V, Salt Lake, Kolkata',
    city: 'Kolkata',
    state: 'West Bengal',
    pincode: '700091',
    phone: '+91 33 4088 9000',
    email: 'hq@zitatelecom.in',
    services: ['Executive Office', 'Enterprise Sales', 'Customer Support', 'NOC Center'],
    openingHours: 'Mon-Sat: 09:00 - 20:00',
    isActive: true
  },
  {
    id: 'loc-2',
    name: 'ZITA Retail Experience Center - Bidhannagar',
    type: 'RETAIL',
    latitude: 22.5830,
    longitude: 88.4180,
    address: 'FD Block, Near City Centre 1, Salt Lake, Kolkata',
    city: 'Kolkata',
    state: 'West Bengal',
    pincode: '700091',
    phone: '+91 98300 11223',
    email: 'saltlake.store@zitatelecom.in',
    services: ['New Connections', 'Bill Payment', 'Hardware Demo', 'SIM & OTT Top-ups'],
    openingHours: 'Everyday: 10:00 - 21:00',
    isActive: true
  },
  {
    id: 'loc-3',
    name: 'ZITA Central Node & Hub - Park Street',
    type: 'NETWORK_NODE',
    latitude: 22.5532,
    longitude: 88.3512,
    address: '77 Park Street, Camac Street Intersection, Kolkata',
    city: 'Kolkata',
    state: 'West Bengal',
    pincode: '700016',
    phone: '+91 33 2229 4410',
    email: 'parkstreet.node@zitatelecom.in',
    services: ['Core Ring Node', 'Dark Fiber Termination', 'Corporate Leased Line'],
    openingHours: '24/7 Monitored Facility',
    isActive: true
  },
  {
    id: 'loc-4',
    name: 'ZITA Store - New Town Rajarhat',
    type: 'RETAIL',
    latitude: 22.6231,
    longitude: 88.4682,
    address: 'Action Area 1B, Near Axis Mall, New Town, Kolkata',
    city: 'Kolkata',
    state: 'West Bengal',
    pincode: '700156',
    phone: '+91 98300 44556',
    email: 'newtown.store@zitatelecom.in',
    services: ['Giga-Fiber Booking', 'Router Upgrades', 'Customer Care'],
    openingHours: 'Everyday: 10:00 - 20:30',
    isActive: true
  },
  {
    id: 'loc-5',
    name: 'ZITA North Regional Hub - Barrackpore',
    type: 'RETAIL',
    latitude: 22.7620,
    longitude: 88.3710,
    address: 'SN Banerjee Road, Near Railway Station, Barrackpore',
    city: 'Barrackpore',
    state: 'West Bengal',
    pincode: '700120',
    phone: '+91 33 2592 1199',
    email: 'barrackpore@zitatelecom.in',
    services: ['Retail Experience', 'LCO Operations', 'Fiber Support'],
    openingHours: 'Mon-Sat: 09:30 - 20:00',
    isActive: true
  },
  {
    id: 'loc-6',
    name: 'ZITA LCO Partner Network - Barasat Hub',
    type: 'LCO',
    latitude: 22.7210,
    longitude: 88.4810,
    address: 'Jessore Road, Champadali More, Barasat',
    city: 'Barasat',
    state: 'West Bengal',
    pincode: '700124',
    phone: '+91 98311 99887',
    email: 'lco.barasat@zitatelecom.in',
    services: ['Last-Mile Cable Partner', 'FTTH Drop Maintenance', 'On-field Tech Support'],
    openingHours: 'Mon-Sat: 09:00 - 19:00',
    isActive: true
  },
  {
    id: 'loc-7',
    name: 'ZITA West Node - Howrah Station Hub',
    type: 'NETWORK_NODE',
    latitude: 22.5851,
    longitude: 88.3418,
    address: 'Grand Trunk Road, Near Howrah AC Market, Howrah',
    city: 'Howrah',
    state: 'West Bengal',
    pincode: '711101',
    phone: '+91 33 2660 7788',
    email: 'howrah.node@zitatelecom.in',
    services: ['Primary Fiber Ring Node', 'GigaPOP', 'FTTH Distribution'],
    openingHours: '24/7 Technical Operations',
    isActive: true
  },
  {
    id: 'loc-8',
    name: 'ZITA Retail Store - South Kolkata (Maheshtala / Behala)',
    type: 'RETAIL',
    latitude: 22.4988,
    longitude: 88.3012,
    address: 'Diamond Harbour Road, Behala Chowrasta, Kolkata',
    city: 'Kolkata',
    state: 'West Bengal',
    pincode: '700034',
    phone: '+91 98302 77889',
    email: 'behala.store@zitatelecom.in',
    services: ['Giga-Fiber Booking', 'IPTV Demos', 'Bill Payments'],
    openingHours: 'Mon-Sun: 10:00 - 20:00',
    isActive: true
  },
  {
    id: 'loc-dunlop',
    name: 'ZITA Dunlop Fiber Gateway POP',
    type: 'NETWORK_NODE',
    latitude: 22.6510,
    longitude: 88.3760,
    address: 'BT Road, Dunlop Crossing, North Kolkata',
    city: 'Kolkata',
    state: 'West Bengal',
    pincode: '700108',
    phone: '+91 33 2557 8899',
    email: 'dunlop.pop@zitatelecom.in',
    services: ['DWDM Core Node', '100Gbps Backbone Interconnect', 'High-Speed Fiber Switching'],
    openingHours: '24/7 Monitored Facility',
    isActive: true
  },
  {
    id: 'loc-visitor-itachi',
    name: 'itachi uchiha',
    type: 'RETAIL',
    latitude: 22.6150,
    longitude: 88.4200,
    address: 'VIP Road, Baguiati / Nagerbazar Intersection, Kolkata',
    city: 'Kolkata',
    state: 'West Bengal',
    pincode: '700059',
    phone: '+91 98300 99887',
    email: 'visitor.itachi@zitatelecom.in',
    services: ['Visitor', 'Active Fiber Feasibility Checked'],
    openingHours: 'Online Visitor Node',
    isActive: true
  },
  {
    id: 'loc-keshtopur',
    name: 'Keshtopur Fiber Distribution Hub',
    type: 'LCO',
    latitude: 22.5950,
    longitude: 88.4280,
    address: 'Main Road, Keshtopur Market, Kolkata',
    city: 'Kolkata',
    state: 'West Bengal',
    pincode: '700102',
    phone: '+91 98311 22334',
    email: 'keshtopur.lco@zitatelecom.in',
    services: ['FTTH Drop Maintenance', 'Same Day Activation'],
    openingHours: 'Mon-Sat: 09:00 - 20:00',
    isActive: true
  },
  {
    id: 'loc-9',
    name: 'ZITA Hooghly Franchise Hub - Serampore',
    type: 'LCO',
    latitude: 22.7520,
    longitude: 88.3420,
    address: 'GT Road, Battala, Serampore, Hooghly',
    city: 'Serampore',
    state: 'West Bengal',
    pincode: '712201',
    phone: '+91 33 2652 3344',
    email: 'serampore.lco@zitatelecom.in',
    services: ['Cable & Fiber Partner', 'Local Technical Team'],
    openingHours: 'Mon-Sat: 09:30 - 19:30',
    isActive: true
  },
  {
    id: 'loc-10',
    name: 'ZITA High-Capacity POP Node - Dankuni',
    type: 'NETWORK_NODE',
    latitude: 22.6850,
    longitude: 88.2910,
    address: 'NH-19 Industrial Corridor, Dankuni',
    city: 'Dankuni',
    state: 'West Bengal',
    pincode: '712311',
    phone: '+91 33 2659 0011',
    email: 'dankuni.pop@zitatelecom.in',
    services: ['Sub-station Gateway', 'DWDM Long Haul Link'],
    openingHours: '24/7 Managed Facility',
    isActive: true
  }
];

export const MOCK_COVERAGE_ZONES: CoverageZone[] = [
  {
    id: 'cov-1',
    name: 'Greater Kolkata Metro Fiber Ring',
    city: 'Kolkata',
    centerLat: 22.5726,
    centerLng: 88.3639,
    radiusMeters: 18000,
    status: 'AVAILABLE',
    color: '#001A57'
  },
  {
    id: 'cov-2',
    name: 'Salt Lake & New Town Tech Corridor',
    city: 'Kolkata',
    centerLat: 22.5850,
    centerLng: 88.4450,
    radiusMeters: 8000,
    status: 'AVAILABLE',
    color: '#FFD000'
  },
  {
    id: 'cov-3',
    name: 'Howrah & Industrial Hub Zone',
    city: 'Howrah',
    centerLat: 22.5850,
    centerLng: 88.3200,
    radiusMeters: 10000,
    status: 'AVAILABLE',
    color: '#001A57'
  },
  {
    id: 'cov-4',
    name: 'North 24 Parganas Belt (Dum Dum, Barrackpore, Barasat)',
    city: 'North 24 Parganas',
    centerLat: 22.7200,
    centerLng: 88.4200,
    radiusMeters: 15000,
    status: 'AVAILABLE',
    color: '#FF0088'
  },
  {
    id: 'cov-5',
    name: 'Hooghly Expansion Ring (Dankuni - Serampore)',
    city: 'Hooghly',
    centerLat: 22.7300,
    centerLng: 88.3100,
    radiusMeters: 12000,
    status: 'LIMITED_COVERAGE',
    color: '#0284C7'
  }
];

export const MOCK_PLANS: Plan[] = [
  {
    id: 'plan-50',
    title: 'Starter Giga-Fiber',
    speedMbps: 50,
    priceMonthly: 499,
    priceQuarterly: 1399,
    priceAnnual: 4999,
    ottInclusions: ['ZITA Play Basic', 'Hungama Play'],
    features: ['Truly Unlimited Fiber Data', 'Dual-Band Wi-Fi Router Included', '99.9% Network Uptime', 'Zero Installation Fee on Annual'],
    category: 'residential'
  },
  {
    id: 'plan-100',
    title: 'Popular Fiber Max',
    speedMbps: 100,
    priceMonthly: 699,
    priceQuarterly: 1999,
    priceAnnual: 6999,
    ottInclusions: ['Disney+ Hotstar', 'SonyLIV', 'ZEE5', 'ZITA Play IPTV (350+ Channels)'],
    features: ['Symmteric Upload/Download Speed', 'Free Dual-Band Gigabit Router', 'Low Latency for Gaming', '24/7 Priority Helpline'],
    popular: true,
    category: 'residential'
  },
  {
    id: 'plan-200',
    title: 'Entertainment Super Pack',
    speedMbps: 200,
    priceMonthly: 999,
    priceQuarterly: 2799,
    priceAnnual: 9999,
    ottInclusions: ['Amazon Prime Video', 'Disney+ Hotstar', 'SonyLIV', 'ZEE5', 'Hoichoi', '500+ Live IPTV HD Channels'],
    features: ['Includes Free 4K Smart Android Box', 'Zero Buffer Streaming', 'Wi-Fi 6 Mesh Ready', 'Free Static IP Option'],
    category: 'residential'
  },
  {
    id: 'plan-500',
    title: 'Giga-X Extreme 500',
    speedMbps: 500,
    priceMonthly: 1499,
    priceQuarterly: 4199,
    priceAnnual: 14999,
    ottInclusions: ['Netflix Standard', 'Amazon Prime', 'Disney+ Hotstar', 'SonyLIV', 'Hoichoi', 'ZITA Play IPTV All HD Channels'],
    features: ['Ultra-Low Ping < 5ms for Gaming', 'Free Wi-Fi 6 Mesh Router', 'Priority On-Site Support within 2 Hours', 'Free Static IPv4'],
    category: 'gaming'
  },
  {
    id: 'plan-1000',
    title: '1-Gbps Ultra Prime',
    speedMbps: 1000,
    priceMonthly: 2999,
    priceQuarterly: 8499,
    priceAnnual: 29999,
    ottInclusions: ['Netflix Premium (4K)', 'Amazon Prime Video', 'Apple TV+ (6 mo)', 'Disney+ Hotstar', 'SonyLIV', 'Full OTT Suite'],
    features: ['Dedicated Fiber Core', '0% Packet Loss Guarantee', 'Dedicated VIP Relationship Manager', 'Free Tri-Band Mesh System'],
    popular: true,
    category: 'prime'
  },
  {
    id: 'biz-300',
    title: 'Enterprise Dedicated Fiber 300',
    speedMbps: 300,
    priceMonthly: 3499,
    priceQuarterly: 9999,
    priceAnnual: 34999,
    ottInclusions: ['Business Productivity Suite', 'Dedicated Managed SLA'],
    features: ['1:1 Uncompressed Leased Bandwidth', '99.99% Guaranteed SLA Uptime', 'Dual Multi-Homed Routing', '24/7 NOC Monitoring'],
    category: 'business'
  }
];

export const MOCK_SERVICES: ServiceItem[] = [
  {
    id: 'srv-1',
    slug: 'giga-fiber-broadband',
    name: 'Giga-Fiber Broadband',
    description: 'Ultra-fast home internet with speeds up to 1Gbps, symmetric upload & download, and 99.9% uptime guarantee across India.',
    category: 'Residential Internet',
    iconName: 'Wifi',
    priceStarting: '₹499/mo',
    features: ['Speeds up to 1000 Mbps', 'Truly Unlimited Data without FUP', 'Free Dual-Band Wi-Fi Router', 'Low Latency FTTH Connection'],
    benefits: ['Stream 4K/8K content effortlessly', 'Work from home with rock-solid stability', 'Instant download of huge game files'],
    detailsText: 'ZITA Giga-Fiber utilizes pure glass fiber cables right to your doorstep (FTTH), delivering immune-to-weather broadband with sub-millisecond local latency.'
  },
  {
    id: 'srv-2',
    slug: 'managed-network-solutions',
    name: 'Managed Network Solutions',
    description: 'End-to-end infrastructure management for enterprises, tech parks, shopping malls, and large residential complexes.',
    category: 'Enterprise Solutions',
    iconName: 'Server',
    priceStarting: 'Custom Quote',
    features: ['Custom SD-WAN Architecture', 'Proactive 24/7 NOC Monitoring', 'Managed Wi-Fi & Firewalls', 'Automated Failover Links'],
    benefits: ['Zero operational downtime', 'Scalable bandwidth on demand', 'Reduced IT maintenance costs'],
    detailsText: 'We engineer, deploy, and maintain custom high-speed network topologies for businesses, guaranteeing SLA compliance and robust cyber defense.'
  },
  {
    id: 'srv-3',
    slug: 'dedicated-internet-leased-line',
    name: 'Dedicated Internet Leased Line (ILL)',
    description: '1:1 uncompressed, dedicated internet pipe with enterprise-grade SLA, guaranteed throughput, and redundant fiber rings.',
    category: 'Corporate Internet',
    iconName: 'Activity',
    priceStarting: '₹3,499/mo',
    features: ['1:1 Symmetric Committed Rate', '99.99% SLA Uptime Guarantee', 'Dual Route Ring Redundancy', 'Dedicated Static IPv4 Blocks'],
    benefits: ['Mission-critical reliability for IT/ITeS', 'Zero bandwidth throttling or congestion', 'Direct peering with major cloud providers'],
    detailsText: 'Designed for IT companies, hospitals, educational institutions, and financial organizations that require uncompromised, symmetrical network throughput.'
  },
  {
    id: 'srv-4',
    slug: 'wi-fi-solutions',
    name: 'Enterprise Wi-Fi Solutions',
    description: 'High-density wireless deployment for commercial offices, hotels, hospitals, and educational institutions.',
    category: 'Wireless Networks',
    iconName: 'Radio',
    priceStarting: '₹1,299/mo',
    features: ['Seamless Mesh Roaming', 'Captive Portal with OTP Login', 'Band Steering & Traffic Shaping', 'Cloud Management Dashboard'],
    benefits: ['Connect 500+ simultaneous devices', 'Secure guest network isolation', 'Centralized cloud control'],
    detailsText: 'Eliminate Wi-Fi dead spots across large campuses with ZITA Smart Mesh Wi-Fi access points powered by centralized controller software.'
  },
  {
    id: 'srv-5',
    slug: 'iptv-entertainment',
    name: 'ZITA Play IPTV',
    description: 'Next-generation Digital TV over fiber delivering 550+ HD Live channels and 7-day catch-up television directly to your TV.',
    category: 'Digital TV',
    iconName: 'Tv',
    priceStarting: 'Included in Select Plans',
    features: ['550+ HD Channels in 4K', '7-Day Rewind & Catch-Up TV', 'Voice Controlled Remote', 'Zero Weather Disruption'],
    benefits: ['Crystal-clear digital picture', 'No satellite dish required', 'Simultaneous viewing on multiple devices'],
    detailsText: 'Say goodbye to rain fade! ZITA Play streams high-definition channels using dedicated IPTV vLANs over fiber for instant channel changes.'
  },
  {
    id: 'srv-6',
    slug: 'ott-entertainment-hub',
    name: 'ZITA OTT Hub',
    description: 'Single-subscription access to 18+ premium OTT streaming apps integrated seamlessly with your broadband connection.',
    category: 'Entertainment',
    iconName: 'Film',
    priceStarting: '₹199/mo Add-on',
    features: ['18+ OTT Apps in 1 Login', 'Netflix, Prime, Disney+ Hotstar', 'Universal Voice Search', 'Unified Monthly Billing'],
    benefits: ['Save over 60% compared to individual OTT apps', 'Easy management from ZITA App', '4K UHD streaming quality'],
    detailsText: 'Simplify your entertainment with one subscription that brings movies, series, live sports, and regional cinema into one unified platform.'
  }
];

export const MOCK_PRODUCTS: ProductItem[] = [
  {
    id: 'prod-1',
    slug: 'zita-dual-band-router-ax1200',
    name: 'ZITA Dual-Band Gigabit Wi-Fi 5 Router',
    tag: 'Best Seller',
    category: 'Router',
    price: 2499,
    mrp: 3999,
    warranty: 'Lifetime Warranty with active ZITA connection',
    description: 'High-speed dual-band AC1200 gigabit router engineered specifically for fiber-optic broadband up to 1000 Mbps.',
    specs: {
      'Wireless Speed': '1200 Mbps (300Mbps 2.4GHz + 867Mbps 5GHz)',
      'Ports': '1 Gigabit WAN + 4 Gigabit LAN Ports',
      'Antennas': '4x 5dBi High-Gain External Antennas',
      'Security': 'WPA3, SPI Firewall, Parental Control',
      'Coverage': 'Up to 1,800 sq. ft.'
    },
    stock: 'In Stock'
  },
  {
    id: 'prod-2',
    slug: 'zita-4k-android-tv-box',
    name: 'ZITA 4K Ultra HD Android Smart Box',
    tag: 'Trending Hardware',
    category: 'STB',
    price: 1999,
    mrp: 3499,
    warranty: '1 Year Replacement Warranty',
    description: 'Turn any TV into a smart TV with Official Android TV 11, Google Assistant voice search, Built-in Chromecast, and 4K HDR playback.',
    specs: {
      'OS': 'Android TV 11.0 Certified',
      'Resolution': '4K Ultra HD @ 60fps (HDR10+ & Dolby Audio)',
      'RAM & Storage': '2GB DDR4 RAM + 16GB eMMC Storage',
      'Connectivity': 'Dual-Band Wi-Fi, Bluetooth 5.0, Ethernet, HDMI 2.1, USB 3.0',
      'Remote': 'Bluetooth Voice Remote with Hotkeys'
    },
    stock: 'In Stock'
  },
  {
    id: 'prod-3',
    slug: 'zita-mesh-wifi-extender',
    name: 'ZITA GigaMesh AX1800 Wi-Fi 6 System',
    tag: 'Whole Home Coverage',
    category: 'Mesh',
    price: 3299,
    mrp: 5999,
    warranty: '2 Years Manufacturer Warranty',
    description: 'Eliminate Wi-Fi dead zones in multi-story houses and large apartments with seamless Wi-Fi 6 mesh technology.',
    specs: {
      'Wireless Standard': 'Wi-Fi 6 (802.11ax) 1800 Mbps',
      'Coverage Area': 'Up to 3,500 sq. ft. per 2-pack',
      'Connected Devices': 'Supports 100+ active devices simultaneously',
      'Feature': 'Seamless Roaming under 1 SSID'
    },
    stock: 'In Stock'
  },
  {
    id: 'prod-4',
    slug: 'zita-gpon-fiber-ont-onu',
    name: 'ZITA XPON Fiber Terminal (ONT / ONU)',
    tag: 'Essential Hardware',
    category: 'ONT',
    price: 1299,
    mrp: 2199,
    warranty: '1 Year Warranty',
    description: 'High-performance Optical Network Terminal converting fiber light signals to gigabit ethernet for high-speed fiber broadband.',
    specs: {
      'PON Port': '1 SC/UPC GPON/EPON Auto-adaptive Port',
      'Ethernet Port': '1 x 10/100/1000 Mbps Auto-negotiation Port',
      'Protocol': 'ITU-T G.984.x GPON Standard',
      'Power Input': '12V / 0.5A'
    },
    stock: 'In Stock'
  }
];

export const MOCK_OFFERS: OfferItem[] = [
  {
    id: 'off-1',
    title: 'Festive Fiber Bonanza — Free Installation & Router',
    discountTag: 'FREE ROUTER + 100% OFF INSTALLATION',
    validityDate: 'Valid till August 31, 2026',
    promoCode: 'ZITA100FREE',
    description: 'Get 100% free fiber installation plus a gratis Dual-Band Gigabit Wi-Fi Router when booking any 6-month or 12-month broadband pack.',
    terms: [
      'Applicable on new residential fiber connections only.',
      'Includes free dual-band gigabit router worth ₹2,499.',
      'Offer valid across Kolkata, Howrah, Hooghly & North 24 Parganas nodes.'
    ],
    category: 'Broadband',
    countdownEnd: '2026-08-31T23:59:59',
    badgeColor: 'magenta'
  },
  {
    id: 'off-2',
    title: '4K Android Smart Box for Just ₹499 with 100Mbps Pack',
    discountTag: 'SAVE ₹1,500 ON HARDWARE',
    validityDate: 'Limited Time Offer',
    promoCode: 'ZITA4KBOX',
    description: 'Upgrade your TV viewing experience! Get the ZITA 4K Smart Android Box worth ₹1,999 at a subsidized price of ₹499 with annual subscription.',
    terms: [
      'Requires minimum 100Mbps annual pack subscription.',
      'Android Box comes with 1 Year warranty.'
    ],
    category: 'Hardware',
    badgeColor: 'yellow'
  },
  {
    id: 'off-3',
    title: 'Refer a Neighbor & Earn ₹500 Bill Cashback',
    discountTag: 'UNLIMITED CASHBACK',
    validityDate: 'Always Active',
    promoCode: 'ZITAREFER',
    description: 'Share the speed with friends! Earn ₹500 discount on your next month bill for every friend who activates a ZITA fiber connection.',
    terms: [
      'No upper limit on referral earnings.',
      'Cashback applied automatically once referred user line goes active.'
    ],
    category: 'Referral',
    badgeColor: 'blue'
  },
  {
    id: 'off-4',
    title: 'Corporate Switch & Save — 3 Months Complimentary Bandwidth',
    discountTag: '3 MONTHS FREE ENTERPRISE',
    validityDate: 'Valid till September 15, 2026',
    promoCode: 'ZITAENT2026',
    description: 'Switch your enterprise internet leased line to ZITA Dedicated Fiber and get 3 months complimentary service with SLA warranty.',
    terms: [
      'Valid for corporate leased lines above 100Mbps.',
      'Includes zero-cost dual router setup & static IP block.'
    ],
    category: 'Corporate',
    badgeColor: 'magenta'
  }
];

export const MOCK_CHANNELS: ChannelItem[] = [
  { id: 'c1', name: 'Star Sports 1 HD', category: 'Sports', isHD: true, language: 'English' },
  { id: 'c2', name: 'Star Sports Select 1 HD', category: 'Sports', isHD: true, language: 'English' },
  { id: 'c3', name: 'Sony Ten 1 HD', category: 'Sports', isHD: true, language: 'English' },
  { id: 'c4', name: 'Star Jalsha HD', category: 'Bengali', isHD: true, language: 'Bengali' },
  { id: 'c5', name: 'Zee Bangla HD', category: 'Bengali', isHD: true, language: 'Bengali' },
  { id: 'c6', name: 'Colors Bangla HD', category: 'Bengali', isHD: true, language: 'Bengali' },
  { id: 'c7', name: 'Star Plus HD', category: 'Entertainment', isHD: true, language: 'Hindi' },
  { id: 'c8', name: 'Zee TV HD', category: 'Entertainment', isHD: true, language: 'Hindi' },
  { id: 'c9', name: 'Sony Entertainment HD', category: 'Entertainment', isHD: true, language: 'Hindi' },
  { id: 'c10', name: 'Star Movies HD', category: 'Movies', isHD: true, language: 'English' },
  { id: 'c11', name: 'Sony PIX HD', category: 'Movies', isHD: true, language: 'English' },
  { id: 'c12', name: 'Zee Cinema HD', category: 'Movies', isHD: true, language: 'Hindi' },
  { id: 'c13', name: 'ABP Ananda HD', category: 'News', isHD: true, language: 'Bengali' },
  { id: 'c14', name: 'India Today HD', category: 'News', isHD: true, language: 'English' },
  { id: 'c15', name: 'National Geographic HD', category: 'Infotainment', isHD: true, language: 'English' },
  { id: 'c16', name: 'Cartoon Network HD', category: 'Kids', isHD: true, language: 'English/Hindi' }
];

export const MOCK_OTT_APPS: OTTAppItem[] = [
  {
    id: 'ott-netflix',
    name: 'Netflix',
    logoText: 'NETFLIX',
    bgColor: '#E50914',
    description: 'Unlimited movies, TV shows, anime, and Netflix originals in 4K Ultra HD.',
    plansIncluded: ['1-Gbps Ultra Prime', 'Giga-X Extreme 500']
  },
  {
    id: 'ott-prime',
    name: 'Amazon Prime Video',
    logoText: 'PRIME',
    bgColor: '#00A8E1',
    description: 'Latest movies, exclusive Amazon originals, live sports, and free Prime delivery.',
    plansIncluded: ['Entertainment Super Pack', 'Giga-X Extreme 500', '1-Gbps Ultra Prime']
  },
  {
    id: 'ott-hotstar',
    name: 'Disney+ Hotstar',
    logoText: 'HOTSTAR',
    bgColor: '#0F1014',
    description: 'Live IPL & International Cricket, Marvel movies, Disney classics, and HBO hits.',
    plansIncluded: ['Popular Fiber Max', 'Entertainment Super Pack', 'Giga-X Extreme 500', '1-Gbps Ultra Prime']
  },
  {
    id: 'ott-sonyliv',
    name: 'SonyLIV',
    logoText: 'SONYLIV',
    bgColor: '#1B1C22',
    description: 'UEFA Champions League football, WWE, Scam 1992, Sony Originals & movies.',
    plansIncluded: ['Popular Fiber Max', 'Entertainment Super Pack', 'Giga-X Extreme 500', '1-Gbps Ultra Prime']
  },
  {
    id: 'ott-zee5',
    name: 'ZEE5',
    logoText: 'ZEE5',
    bgColor: '#8230C6',
    description: 'Blockbuster regional cinema, Bengali hits, web series, and live TV channels.',
    plansIncluded: ['Popular Fiber Max', 'Entertainment Super Pack', 'Giga-X Extreme 500', '1-Gbps Ultra Prime']
  },
  {
    id: 'ott-hoichoi',
    name: 'Hoichoi',
    logoText: 'HOICHOI',
    bgColor: '#E31B23',
    description: 'World’s largest Bengali entertainment platform with 600+ original web series & films.',
    plansIncluded: ['Entertainment Super Pack', 'Giga-X Extreme 500', '1-Gbps Ultra Prime']
  }
];

export const MOCK_FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How fast can I get a new ZITA Fiber connection installed?',
    answer: 'Once you book a connection online or via our helpline, our installation team performs a fiber line feasibility check and activates your connection within 4 to 24 hours in covered areas.',
    category: 'General'
  },
  {
    id: 'faq-2',
    question: 'Are ZITA Fiber plans truly unlimited without FUP speed limits?',
    answer: 'Yes! All ZITA Fiber residential broadband plans come with truly unlimited data without any artificial Fair Usage Policy (FUP) speed drop.',
    category: 'Broadband'
  },
  {
    id: 'faq-3',
    question: 'Is a router included with my broadband connection?',
    answer: 'Yes, a high-performance Dual-Band Wi-Fi Router (2.4GHz + 5GHz) is provided free of charge with all quarterly, half-yearly, and annual plans.',
    category: 'General'
  },
  {
    id: 'faq-4',
    question: 'How do I pay my monthly bill or change my plan?',
    answer: 'You can pay instantly using UPI, Debit/Credit Card, NetBanking, or Wallet on our website or Retail portal. You can also visit any ZITA Retail store or request door-step assistance.',
    category: 'Billing'
  },
  {
    id: 'faq-5',
    question: 'Does ZITA IPTV require a separate dish antenna on my rooftop?',
    answer: 'No! ZITA Play IPTV runs directly over our optic fiber cable (FTTH). No roof antenna is required, ensuring 100% uninterrupted TV even during heavy rains and storms.',
    category: 'IPTV'
  }
];
