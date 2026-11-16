import {BUSINESS_CONFIG} from '@/src/config/business';
import type {ProductCategory, ProductItem} from '@/src/types';

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  'Power Tools',
  'Belt Sanders',
  'Wood Routers',
  'Concrete Vibrators',
  'Drilling Equipment',
  'Cutting and Grinding Tools',
];

export const CATEGORY_SUMMARIES: Record<
  ProductCategory,
  {description: string; image: string}
> = {
  'Power Tools': {
    description:
      'Versatile corded and cordless machines built for daily workshop and jobsite execution.',
    image: BUSINESS_CONFIG.images.powerDrill,
  },
  'Belt Sanders': {
    description:
      'Heavy-duty surface leveling and rapid timber stock removal tools for smooth finishing.',
    image: BUSINESS_CONFIG.images.beltSander,
  },
  'Wood Routers': {
    description:
      'Precision plunge and fixed-base routers for clean edge profiles, mortising, and joinery.',
    image: BUSINESS_CONFIG.images.woodRouter,
  },
  'Concrete Vibrators': {
    description:
      'Portable drive units and flexible poker shafts for reliable concrete consolidation on site.',
    image: BUSINESS_CONFIG.images.concreteVibrator,
  },
  'Drilling Equipment': {
    description:
      'Rotary drills, hammer drills, and drivers suited for masonry, timber, and structural steel.',
    image: BUSINESS_CONFIG.images.powerDrill,
  },
  'Cutting and Grinding Tools': {
    description:
      'Angle grinders and cut-off machines engineered for metal fabrication and stone cutting.',
    image: BUSINESS_CONFIG.images.cuttingGrinder,
  },
};

/**
 * Editable Product Catalogue.
 * Add, remove, or update products below without touching UI components.
 * Note: Prices and unverified technical metrics are intentionally omitted until confirmed.
 */
export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'pt-cordless-combo-kit',
    name: 'Heavy-Duty Rotary & Driver Power Tool Set',
    category: 'Power Tools',
    image: BUSINESS_CONFIG.images.powerDrill,
    shortDescription:
      'Reliable everyday power tools for carpentry, electrical installation, and general site assembly.',
    fullDescription:
      'Designed for contractors and workshop technicians who require dependable torque and balanced handling across varied jobsite tasks. Contact our Namakkal store for available models and current brand options.',
    applications: [
      'Residential and commercial interior fit-outs',
      'Timber framing and cabinet installation',
      'General workshop maintenance and fastening',
    ],
    highlights: [
      'Ergonomic grip geometry for sustained control',
      'Durable housing suited for active worksites',
      'Compatible with standard accessory bits and chucks',
    ],
    availabilityNote: 'Available for in-store inspection and quotation at Namakkal Bazaar.',
  },
  {
    id: 'bs-industrial-belt-sander',
    name: 'Industrial Woodworking Belt Sander',
    category: 'Belt Sanders',
    image: BUSINESS_CONFIG.images.beltSander,
    shortDescription:
      'High-contact belt sanding unit engineered for fast stock removal and flat surface preparation.',
    fullDescription:
      'Built with a stable machined base and integrated dust collection bag to keep woodworking benches cleaner while smoothing rough lumber, tabletops, and door frames.',
    applications: [
      'Furniture manufacturing and solid wood leveling',
      'Door, window frame, and panel resurfacing',
      'Flush sanding of joints and laminated boards',
    ],
    highlights: [
      'Machined flat platen for uniform surface contact',
      'Attached dust bag assembly for cleaner operation',
      'Quick belt tracking and tension adjustment',
    ],
    availabilityNote: 'Inquire for available belt widths and grit consumables in store.',
  },
  {
    id: 'bs-bench-finishing-sander',
    name: 'Compact Joinery Belt Sander',
    category: 'Belt Sanders',
    image: BUSINESS_CONFIG.images.beltSander,
    shortDescription:
      'Balanced belt sander offering controlled handling for fine carpentry and cabinet workshops.',
    fullDescription:
      'Suited for woodworkers needing predictable material removal without gouging finished edges. Ideal for medium-scale joinery and restoration projects.',
    applications: [
      'Cabinetry prep prior to staining or varnishing',
      'Edge smoothing on hardwood and plywood stock',
      'Workshop finishing and paint stripping',
    ],
    highlights: [
      'Front auxiliary handle for two-handed stability',
      'Low-profile nose design for tight reach',
      'Replaceable abrasive belt compatibility',
    ],
    availabilityNote: 'Contact us via WhatsApp or visit the store to check stock.',
  },
  {
    id: 'wr-precision-plunge-router',
    name: 'Precision Plunge Wood Router',
    category: 'Wood Routers',
    image: BUSINESS_CONFIG.images.woodRouter,
    shortDescription:
      'Dual-handle plunge router with fine depth stop column for accurate grooves, dados, and edge shaping.',
    fullDescription:
      'Engineered for clean plunge cuts and repeatable routing depth across hardwoods, softwoods, and engineered boards. Smooth guide columns make intricate template and edge work straightforward.',
    applications: [
      'Decorative edge molding and beveling',
      'Hinge mortising, dado slots, and groove cutting',
      'Signage, inlay, and template-guided woodworking',
    ],
    highlights: [
      'Micro-adjustable depth stop scale',
      'Dual contoured side handles for steady feed control',
      'Rigid cast base with dust extraction attachment',
    ],
    availabilityNote: 'Router bits and collet accessories available separately in store.',
  },
  {
    id: 'cv-portable-concrete-vibrator',
    name: 'Portable Electric Concrete Vibrator Unit',
    category: 'Concrete Vibrators',
    image: BUSINESS_CONFIG.images.concreteVibrator,
    shortDescription:
      'Frame-protected electric concrete vibrator drive paired with a flexible poker shaft for air-pocket removal.',
    fullDescription:
      'Essential construction site equipment for consolidating freshly poured concrete in columns, beams, footings, and slabs. Protective tubular frame helps shield the motor housing during active site handling.',
    applications: [
      'RCC columns, beams, and lintel pouring',
      'Foundation footings and retaining walls',
      'Slab compaction for denser structural concrete',
    ],
    highlights: [
      'Tubular protective roll cage for site durability',
      'Quick-coupling connection for flexible poker shafts',
      'Top carry handle for easy relocation between pours',
    ],
    availabilityNote: 'Ask our team for compatible poker needle lengths and shaft options.',
  },
  {
    id: 'de-rotary-hammer-drill',
    name: 'Rotary Hammer & Masonry Drilling Machine',
    category: 'Drilling Equipment',
    image: BUSINESS_CONFIG.images.powerDrill,
    shortDescription:
      'Heavy-duty rotary hammer drill built for concrete anchoring, brick masonry, and structural drilling.',
    fullDescription:
      'Designed to bore cleanly into reinforced concrete, masonry walls, and stone with reduced operator fatigue. Equipped with an auxiliary side handle and depth gauge rod for repeatable hole depths.',
    applications: [
      'Anchor bolt installation in concrete and masonry',
      'Electrical conduit and plumbing wall penetrations',
      'Light chipping and construction site prep',
    ],
    highlights: [
      'Adjustable 360-degree side handle with depth rod',
      'Mode selector for rotary and hammer drilling',
      'Reinforced gear housing for demanding jobsites',
    ],
    availabilityNote: 'Masonry drill bits and chisels stocked at our Namakkal counter.',
  },
  {
    id: 'de-precision-keyless-drill',
    name: 'Cordless Keyless Chuck Drill Driver',
    category: 'Drilling Equipment',
    image: BUSINESS_CONFIG.images.powerDrill,
    shortDescription:
      'Compact cordless drill driver for fast bit changes, wood boring, and precision screwdriving.',
    fullDescription:
      'Provides freedom of movement across ladders, scaffolding, and tight interior cabinetry spaces where power cords are impractical.',
    applications: [
      'Modular kitchen and wardrobe assembly',
      'Sheet metal fastening and HVAC installation',
      'On-site carpentry and fixture mounting',
    ],
    highlights: [
      'Single-sleeve keyless chuck for quick bit swaps',
      'Multi-setting clutch for controlled fastener torque',
      'Balanced battery base for upright standing',
    ],
    availabilityNote: 'Check in-store for available battery configurations and kits.',
  },
  {
    id: 'cg-heavy-duty-angle-grinder',
    name: 'Industrial Angle Grinder & Masonry Cutter',
    category: 'Cutting and Grinding Tools',
    image: BUSINESS_CONFIG.images.cuttingGrinder,
    shortDescription:
      'Cast-head angle grinder built for steel cutting, weld grinding, and stone or tile slicing.',
    fullDescription:
      'Built around a rugged cast-aluminum gear head with an adjustable protective wheel guard and side handle. Ideal for fabrication workshops, tile setters, and construction contractors.',
    applications: [
      'Mild steel bar, angle, and sheet cutting',
      'Weld seam grinding and surface rust removal',
      'Tile, granite, and masonry cutting with diamond blades',
    ],
    highlights: [
      'Protective metal wheel guard for operator safety',
      'Two-position vibration-damped side handle',
      'Spindle lock button for fast disc changes',
    ],
    availabilityNote: 'Cutting discs, grinding wheels, and diamond blades stocked daily.',
  },
];
