// ===== KONFIGURASI APLIKASI =====
const AppConfig = {
    APP_NAME: "CariKost",
    VERSION: "1.0.0",
    SUPPORTED_CITIES: ["jakarta", "surabaya", "yogyakarta", "malang"],
    PAYMENT_SERVICES: {
        CONTACT: { id: "contact", name: "Dapatkan Nomor Kontak", price: 25000 },
        SURVEY: { id: "survey", name: "Layanan Survey Kos", price: 150000 },
        RENT: { id: "rent", name: "Sewa Langsung", price: 300000 }
    },
    DEFAULT_USER: {
        name: "Budi Santoso",
        email: "budi@example.com",
        phone: "+628123456789"
    }
};

// ===== STATE APLIKASI =====
let AppState = {
    currentUser: null,
    currentPage: "login",
    selectedCity: null,
    selectedAreaType: "campus",
    selectedArea: null,
    currentFilters: {
        kostType: [],
        minPrice: 300000,
        maxPrice: 3000000,
        maxDistance: 5,
        minRating: 3,
        facilities: []
    },
    searchResults: [],
    selectedKost: null,
    selectedService: null
};

// ===== DATA KOS LENGKAP (REAL DATA) =====
const KostData = {
    // Jakarta - Dekat Kampus
    jakarta_campus: [
        {
            id: "JK001",
            name: "Kos Mawar Indah",
            location: "Jl. Margonda Raya No. 123, Depok",
            area: "UI Depok",
            type: "putri",
            price: 1200000,
            distance: 1.2,
            rating: 4.5,
            totalReviews: 124,
            description: "Kos eksklusif untuk mahasiswi dengan fasilitas lengkap dan lingkungan yang aman. Dekat dengan kampus UI dan akses transportasi mudah.",
            images: ["https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
            facilities: ["AC", "WiFi", "Kamar Mandi Dalam", "Dapur Bersama", "Laundry", "Parkir Luas", "CCTV 24 Jam", "Ruang Tamu"],
            owner: {
                name: "Ibu Siti",
                phone: "081234567890",
                rating: 4.8
            },
            rules: ["Tidak boleh membawa teman lawan jenis", "Jam malam 22:00", "Dilarang merokok"],
            availability: "available",
            featured: true
        },
        {
            id: "JK002",
            name: "Kos Pelangi Asri",
            location: "Jl. Kukusan No. 45, Beji",
            area: "UI Depok",
            type: "putra",
            price: 850000,
            distance: 2.5,
            rating: 4.2,
            totalReviews: 89,
            description: "Kos nyaman untuk mahasiswa dengan harga terjangkau. Lingkungan asri dan tenang, cocok untuk belajar.",
            images: ["https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
            facilities: ["WiFi", "Kamar Mandi Dalam", "Laundry", "Parkir Motor", "Ruang Belajar"],
            owner: {
                name: "Pak Budi",
                phone: "081298765432",
                rating: 4.5
            },
            rules: ["Jam malam 23:00", "Dilarang narkoba"],
            availability: "available",
            featured: false
        },
        {
            id: "JK003",
            name: "Kos Bunga Matahari",
            location: "Jl. Lenteng Agung No. 78, Jagakarsa",
            area: "UI Depok",
            type: "campur",
            price: 950000,
            distance: 3.1,
            rating: 4.0,
            totalReviews: 67,
            description: "Kos campur dengan kamar luas dan ventilasi baik. Dekat dengan kampus dan pusat perbelanjaan.",
            images: ["https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
            facilities: ["Kipas Angin", "Kamar Mandi Dalam", "Dapur Bersama", "Parkir", "WiFi Area"],
            owner: {
                name: "Ibu Rini",
                phone: "081355667788",
                rating: 4.2
            },
            rules: ["Bebas jam malam", "Wajib menjaga kebersihan"],
            availability: "available",
            featured: false
        },
        {
            id: "JK004",
            name: "Kos Mahkota Depok",
            location: "Jl. Siliwangi No. 56, Depok",
            area: "UI Depok",
            type: "putri",
            price: 1500000,
            distance: 0.8,
            rating: 4.8,
            totalReviews: 156,
            description: "Kos premium dengan kamar full furnished. Dilengkapi AC, WiFi cepat, dan keamanan 24 jam.",
            images: ["https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
            facilities: ["AC", "WiFi High Speed", "Kamar Mandi Dalam", "Lemari Baju", "Meja Belajar", "Kursi", "Kasur", "Laundry", "Parkir Mobil"],
            owner: {
                name: "PT. Sejahtera Abadi",
                phone: "021-1234567",
                rating: 4.9
            },
            rules: ["Tidak boleh hewan peliharaan", "Dilarang merokok", "Jam malam 22:00"],
            availability: "limited",
            featured: true
        },
        {
            id: "JK005",
            name: "Kos Padjadjaran",
            location: "Jl. Rawamangun No. 34, Jakarta Timur",
            area: "UNJ Rawamangun",
            type: "putra",
            price: 750000,
            distance: 1.5,
            rating: 4.1,
            totalReviews: 45,
            description: "Kos ekonomis dekat kampus UNJ. Cocok untuk mahasiswa dengan budget terbatas.",
            images: ["https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
            facilities: ["Kipas Angin", "Kamar Mandi Luar", "Dapur Bersama", "Parkir Motor"],
            owner: {
                name: "Pak Joko",
                phone: "081244556677",
                rating: 4.0
            },
            rules: ["Wajib bayar tepat waktu", "Bebas jam malam"],
            availability: "available",
            featured: false
        },
        {
            id: "JK006",
            name: "Kos Atma Jaya Residence",
            location: "Jl. Jend. Sudirman Kav. 21, Jakarta Selatan",
            area: "Atma Jaya",
            type: "campur",
            price: 2500000,
            distance: 0.5,
            rating: 4.7,
            totalReviews: 203,
            description: "Kos mewah di jantung Jakarta. Fasilitas hotel bintang 3 dengan lokasi strategis.",
            images: ["https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
            facilities: ["AC", "WiFi", "Kamar Mandi Dalam", "TV", "Kulkas", "Dapur Pribadi", "Gym", "Swimming Pool", "Cafeteria"],
            owner: {
                name: "PT. Luxury Living",
                phone: "021-8765432",
                rating: 4.8
            },
            rules: ["Wajib identitas lengkap", "Deposit 2 bulan", "Dilarang hewan peliharaan"],
            availability: "available",
            featured: true
        },
        {
            id: "JK007",
            name: "Kos BINUS Boarding House",
            location: "Jl. Alam Sutera Kav. 12, Tangerang",
            area: "BINUS Alam Sutera",
            type: "putri",
            price: 1800000,
            distance: 1.8,
            rating: 4.6,
            totalReviews: 178,
            description: "Kos khusus mahasiswi BINUS dengan sistem keamanan ketat dan lingkungan yang kondusif untuk belajar.",
            images: ["https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
            facilities: ["AC", "WiFi", "Kamar Mandi Dalam", "Meja Belajar", "Lemari", "Kasur", "Laundry", "Parkir", "Security 24/7"],
            owner: {
                name: "Yayasan BINUS",
                phone: "021-7654321",
                rating: 4.7
            },
            rules: ["Hanya untuk mahasiswi BINUS", "Jam malam 22:00", "Wajib kartu mahasiswa"],
            availability: "limited",
            featured: true
        },
        {
            id: "JK008",
            name: "Kos Trisakti Dormitory",
            location: "Jl. Kyai Tapa No. 89, Jakarta Barat",
            area: "Trisakti",
            type: "putra",
            price: 1300000,
            distance: 0.9,
            rating: 4.3,
            totalReviews: 112,
            description: "Kos modern dengan desain minimalis. Dekat dengan kampus Trisakti dan pusat bisnis.",
            images: ["https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
            facilities: ["AC", "WiFi", "Kamar Mandi Dalam", "Lemari", "Meja", "Kasur", "Parkir", "CCTV"],
            owner: {
                name: "Pak Hendra",
                phone: "081377889900",
                rating: 4.4
            },
            rules: ["Tidak boleh merokok di kamar", "Wajib menjaga ketenangan"],
            availability: "available",
            featured: false
        },
        {
            id: "JK009",
            name: "Kos Tarumanagara Inn",
            location: "Jl. Letjen S. Parman No. 67, Jakarta Barat",
            area: "Tarumanagara",
            type: "campur",
            price: 1100000,
            distance: 1.2,
            rating: 4.2,
            totalReviews: 89,
            description: "Kos dengan konsep homestay. Suasana kekeluargaan dan lingkungan yang hangat.",
            images: ["https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
            facilities: ["AC", "WiFi", "Kamar Mandi Dalam", "Dapur Bersama", "Living Room", "Parkir", "Garden"],
            owner: {
                name: "Ibu Ani",
                phone: "081266778899",
                rating: 4.6
            },
            rules: ["Bebas jam malam", "Wajib ikut kerja bakti mingguan"],
            availability: "available",
            featured: false
        },
        {
            id: "JK010",
            name: "Kos UIN Syarif Hidayatullah",
            location: "Jl. Ir. H. Juanda No. 95, Ciputat",
            area: "UIN Jakarta",
            type: "putri",
            price: 800000,
            distance: 2.3,
            rating: 4.0,
            totalReviews: 67,
            description: "Kos syariah dengan pengelolaan berdasarkan prinsip Islam. Lingkungan yang religius dan aman.",
            images: ["https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
            facilities: ["Kipas Angin", "Kamar Mandi Dalam", "Mushola", "Perpustakaan", "Parkir", "WiFi Area"],
            owner: {
                name: "Yayasan Al-Falah",
                phone: "081299887766",
                rating: 4.3
            },
            rules: ["Wajib shalat 5 waktu", "Berpakaian muslimah", "Jam malam 21:00"],
            availability: "available",
            featured: false
        }
    ],

    // Jakarta - Dekat Kawasan Pekerjaan
    jakarta_work: [
        {
            id: "JKW001",
            name: "Sudirman Plaza Residence",
            location: "Jl. Sudirman Kav. 25, Jakarta Selatan",
            area: "Sudirman - Thamrin",
            type: "pasutri",
            price: 3500000,
            distance: 0.3,
            rating: 4.8,
            totalReviews: 312,
            description: "Apartemen service dengan fasilitas hotel. Lokasi strategis di jantung bisnis Jakarta.",
            images: ["https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
            facilities: ["AC", "WiFi", "TV LED", "Kulkas", "Dapur", "Gym", "Pool", "Cafeteria", "Laundry Service", "Cleaning Service"],
            owner: {
                name: "PT. Sudirman Property",
                phone: "021-9998888",
                rating: 4.9
            },
            rules: ["Minimal kontrak 6 bulan", "Deposit 3 bulan", "No pets allowed"],
            availability: "available",
            featured: true
        },
        {
            id: "JKW002",
            name: "Kuningan Executive Apartment",
            location: "Jl. HR Rasuna Said Kav. C-1, Kuningan",
            area: "Kuningan",
            type: "campur",
            price: 2800000,
            distance: 0.5,
            rating: 4.7,
            totalReviews: 245,
            description: "Apartemen modern untuk profesional muda. Dekat dengan perkantoran dan pusat bisnis.",
            images: ["https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
            facilities: ["AC", "WiFi", "TV", "Kulkas", "Dapur Mini", "Gym", "Swimming Pool", "Business Center"],
            owner: {
                name: "PT. Kuningan Tower",
                phone: "021-8887777",
                rating: 4.8
            },
            rules: ["Minimal kontrak 1 tahun", "Wajib KTP & NPWP", "No smoking"],
            availability: "limited",
            featured: true
        },
        {
            id: "JKW003",
            name: "Gatot Subroto Business Dorm",
            location: "Jl. Gatot Subroto Kav. 12, Jakarta Selatan",
            area: "Gatot Subroto",
            type: "putra",
            price: 1800000,
            distance: 0.8,
            rating: 4.4,
            totalReviews: 156,
            description: "Kos khusus pekerja dengan sistem co-living. Cocok untuk fresh graduate dan profesional.",
            images: ["https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
            facilities: ["AC", "WiFi High Speed", "Kamar Mandi Dalam", "Workspace", "Gym", "Laundry", "Cafeteria", "Meeting Room"],
            owner: {
                name: "PT. CoLiving Spaces",
                phone: "021-7776666",
                rating: 4.5
            },
            rules: ["Usia 21-35 tahun", "Wajib kerja tetap", "No visitors after 10 PM"],
            availability: "available",
            featured: false
        },
        {
            id: "JKW004",
            name: "Pluit Waterfront Residence",
            location: "Jl. Pluit Indah No. 88, Jakarta Utara",
            area: "Pluit - Penjaringan",
            type: "pasutri",
            price: 3200000,
            distance: 1.2,
            rating: 4.6,
            totalReviews: 189,
            description: "Apartemen dengan view laut. Fasilitas lengkap dan lingkungan eksklusif.",
            images: ["https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
            facilities: ["AC", "WiFi", "TV", "Kulkas", "Dapur", "Balcony", "Gym", "Pool", "Tennis Court", "Supermarket"],
            owner: {
                name: "PT. Pluit Development",
                phone: "021-6665555",
                rating: 4.7
            },
            rules: ["Minimal kontrak 1 tahun", "Deposit 2 bulan", "No pets"],
            availability: "available",
            featured: true
        },
        {
            id: "JKW005",
            name: "Cilandak Business House",
            location: "Jl. TB Simatupang Kav. 45, Jakarta Selatan",
            area: "Cilandak",
            type: "campur",
            price: 2200000,
            distance: 1.5,
            rating: 4.3,
            totalReviews: 134,
            description: "Townhouse dengan konsep modern minimalist. Dekat dengan kawasan perkantoran Cilandak.",
            images: ["https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
            facilities: ["AC", "WiFi", "TV", "Kulkas", "Dapur", "Carport", "Garden", "Security"],
            owner: {
                name: "Pak Agus",
                phone: "081288997766",
                rating: 4.4
            },
            rules: ["Wajib KTP & Surat Kerja", "No party", "Waste sorting required"],
            availability: "available",
            featured: false
        },
        {
            id: "JKW006",
            name: "Tanjung Priok Industrial Dorm",
            location: "Jl. Enggano No. 23, Tanjung Priok",
            area: "Tanjung Priok",
            type: "putra",
            price: 1200000,
            distance: 2.0,
            rating: 4.0,
            totalReviews: 89,
            description: "Asrama pekerja dengan fasilitas dasar. Cocok untuk pekerja pabrik dan pelabuhan.",
            images: ["https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
            facilities: ["Kipas Angin", "Kamar Mandi Bersama", "Dapur Bersama", "Parkir", "Mess", "Canteen"],
            owner: {
                name: "PT. Priok Sejahtera",
                phone: "021-5554444",
                rating: 4.1
            },
            rules: ["Hanya untuk pekerja tetap", "Wajib ID perusahaan", "Jam malam 22:00"],
            availability: "available",
            featured: false
        }
    ],

    // Surabaya - Dekat Kampus
    surabaya_campus: [
        {
            id: "SB001",
            name: "Kos ITS Sukolilo",
            location: "Jl. Keputih Tegal Timur No. 12, Sukolilo",
            area: "ITS Sukolilo",
            type: "putra",
            price: 850000,
            distance: 0.9,
            rating: 4.4,
            totalReviews: 156,
            description: "Kos favorit mahasiswa ITS. Lingkungan akademik dan dekat dengan kampus.",
            images: ["https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
            facilities: ["WiFi", "Kamar Mandi Dalam", "Dapur Bersama", "Parkir", "Ruang Belajar"],
            availability: "available",
            featured: true
        },
        {
            id: "SB002",
            name: "Kos UNAIR B",
            location: "Jl. Dharmawangsa No. 45, Surabaya",
            area: "UNAIR B",
            type: "putri",
            price: 950000,
            distance: 1.2,
            rating: 4.5,
            totalReviews: 178,
            description: "Kos eksklusif untuk mahasiswi UNAIR. Keamanan terjamin dan lingkungan asri.",
            images: ["https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
            facilities: ["AC", "WiFi", "Kamar Mandi Dalam", "Laundry", "Parkir", "CCTV"],
            availability: "available",
            featured: true
        },
        {
            id: "SB003",
            name: "Kos UB Surabaya",
            location: "Jl. Raya Darmo No. 78, Surabaya",
            area: "UB - UMM",
            type: "campur",
            price: 750000,
            distance: 1.8,
            rating: 4.2,
            totalReviews: 112,
            description: "Kos dengan harga terjangkau untuk mahasiswa UB dan UMM. Lokasi strategis.",
            images: ["https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
            facilities: ["Kipas Angin", "Kamar Mandi Dalam", "Dapur", "Parkir", "WiFi Area"],
            availability: "available",
            featured: false
        },
        {
            id: "SB004",
            name: "Kos UPN Veteran",
            location: "Jl. Rungkut Madya No. 34, Surabaya",
            area: "UPN Veteran",
            type: "putra",
            price: 800000,
            distance: 1.5,
            rating: 4.1,
            totalReviews: 89,
            description: "Kos dekat kampus UPN. Fasilitas lengkap dan harga bersaing.",
            images: ["https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
            facilities: ["AC", "WiFi", "Kamar Mandi Dalam", "Parkir", "Laundry"],
            availability: "limited",
            featured: false
        }
    ],

    // Surabaya - Dekat Kawasan Industri
    surabaya_work: [
        {
            id: "SBW001",
            name: "Rungkut Industrial Dorm",
            location: "Jl. Rungkut Industri No. 56, Surabaya",
            area: "Rungkut Industri",
            type: "putra",
            price: 1200000,
            distance: 0.8,
            rating: 4.3,
            totalReviews: 145,
            description: "Asrama pekerja kawasan industri Rungkut. Fasilitas lengkap untuk karyawan pabrik.",
            images: ["https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
            facilities: ["AC", "WiFi", "Kamar Mandi Dalam", "Mess", "Canteen", "Parkir", "Laundry"],
            availability: "available",
            featured: true
        },
        {
            id: "SBW002",
            name: "Wonokromo Business Residence",
            location: "Jl. Wonokromo No. 89, Surabaya",
            area: "Wonokromo",
            type: "campur",
            price: 1800000,
            distance: 1.2,
            rating: 4.4,
            totalReviews: 123,
            description: "Apartemen untuk profesional di kawasan bisnis Wonokromo. Dekat dengan pusat perdagangan.",
            images: ["https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
            facilities: ["AC", "WiFi", "TV", "Kulkas", "Dapur", "Gym", "Pool", "Business Center"],
            availability: "available",
            featured: true
        }
    ],

    // Yogyakarta - Dekat Kampus
    yogyakarta_campus: [
        {
            id: "YOG001",
            name: "Kos UGM Seturan",
            location: "Jl. Seturan Raya No. 12, Sleman",
            area: "UGM",
            type: "campur",
            price: 800000,
            distance: 0.7,
            rating: 4.6,
            totalReviews: 234,
            description: "Kos legendaris mahasiswa UGM. Suasana kekeluargaan dan harga terjangkau.",
            images: ["https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
            facilities: ["Kipas Angin", "Kamar Mandi Dalam", "Dapur Bersama", "Parkir", "Ruang Tamu"],
            availability: "available",
            featured: true
        },
        {
            id: "YOG002",
            name: "Kos UII Condongcatur",
            location: "Jl. Kaliurang Km 14, Sleman",
            area: "UII",
            type: "putri",
            price: 950000,
            distance: 1.1,
            rating: 4.5,
            totalReviews: 189,
            description: "Kos syariah untuk mahasiswi UII. Lingkungan religius dan fasilitas memadai.",
            images: ["https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
            facilities: ["AC", "WiFi", "Kamar Mandi Dalam", "Mushola", "Perpustakaan", "Parkir"],
            availability: "available",
            featured: true
        },
        {
            id: "YOG003",
            name: "Kos UMY Ringroad",
            location: "Jl. Ringroad Barat No. 56, Bantul",
            area: "UMY",
            type: "putra",
            price: 750000,
            distance: 1.5,
            rating: 4.3,
            totalReviews: 156,
            description: "Kos ekonomis dekat kampus UMY. Akses mudah dan lingkungan tenang.",
            images: ["https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
            facilities: ["Kipas Angin", "Kamar Mandi Dalam", "Dapur", "Parkir", "WiFi Area"],
            availability: "available",
            featured: false
        },
        {
            id: "YOG004",
            name: "Kos UNY Karangmalang",
            location: "Jl. Colombo No. 78, Sleman",
            area: "UNY",
            type: "campur",
            price: 850000,
            distance: 0.9,
            rating: 4.4,
            totalReviews: 167,
            description: "Kos favorit mahasiswa UNY. Dekat dengan kampus dan pusat kuliner.",
            images: ["https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
            facilities: ["AC", "WiFi", "Kamar Mandi Dalam", "Dapur Bersama", "Parkir", "Laundry"],
            availability: "limited",
            featured: false
        }
    ],

    // Yogyakarta - Dekat Kawasan Pekerjaan
    yogyakarta_work: [
        {
            id: "YOGW001",
            name: "Sudirman Business Apartment",
            location: "Jl. Jend. Sudirman No. 45, Yogyakarta",
            area: "Jl. Sudirman",
            type: "pasutri",
            price: 2200000,
            distance: 0.5,
            rating: 4.7,
            totalReviews: 189,
            description: "Apartemen modern di kawasan bisnis Jl. Sudirman. Fasilitas lengkap untuk profesional.",
            images: ["https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
            facilities: ["AC", "WiFi", "TV", "Kulkas", "Dapur", "Gym", "Pool", "Business Lounge"],
            availability: "available",
            featured: true
        },
        {
            id: "YOGW002",
            name: "Seturan Executive House",
            location: "Jl. Seturan Raya No. 89, Sleman",
            area: "Seturan",
            type: "campur",
            price: 1800000,
            distance: 1.2,
            rating: 4.5,
            totalReviews: 134,
            description: "Townhouse eksklusif di kawasan perkantoran Seturan. Cocok untuk eksekutif muda.",
            images: ["https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
            facilities: ["AC", "WiFi", "TV", "Kulkas", "Dapur", "Carport", "Garden", "Security"],
            availability: "available",
            featured: true
        }
    ],

    // Malang - Dekat Kampus
    malang_campus: [
        {
            id: "MLG001",
            name: "Kos UB Lowokwaru",
            location: "Jl. Veteran No. 12, Lowokwaru",
            area: "UB",
            type: "campur",
            price: 750000,
            distance: 0.8,
            rating: 4.5,
            totalReviews: 198,
            description: "Kos favorit mahasiswa UB. Suasana kekeluargaan dan harga terjangkau.",
            images: ["https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
            facilities: ["Kipas Angin", "Kamar Mandi Dalam", "Dapur Bersama", "Parkir", "Ruang Belajar"],
            availability: "available",
            featured: true
        },
        {
            id: "MLG002",
            name: "Kos UMM Dinoyo",
            location: "Jl. Raya Tlogomas No. 45, Lowokwaru",
            area: "UMM",
            type: "putri",
            price: 850000,
            distance: 1.1,
            rating: 4.6,
            totalReviews: 176,
            description: "Kos eksklusif untuk mahasiswi UMM. Keamanan terjamin dan lingkungan asri.",
            images: ["https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
            facilities: ["AC", "WiFi", "Kamar Mandi Dalam", "Laundry", "Parkir", "CCTV"],
            availability: "available",
            featured: true
        },
        {
            id: "MLG003",
            name: "Kos Polinema Blimbing",
            location: "Jl. Soekarno Hatta No. 78, Blimbing",
            area: "Polinema",
            type: "putra",
            price: 700000,
            distance: 1.5,
            rating: 4.3,
            totalReviews: 145,
            description: "Kos ekonomis dekat kampus Polinema. Cocok untuk mahasiswa dengan budget terbatas.",
            images: ["https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
            facilities: ["Kipas Angin", "Kamar Mandi Luar", "Dapur", "Parkir", "WiFi Area"],
            availability: "available",
            featured: false
        },
        {
            id: "MLG004",
            name: "Kos UNISMA Merjosari",
            location: "Jl. Merjosari No. 34, Lowokwaru",
            area: "UNISMA",
            type: "campur",
            price: 800000,
            distance: 0.9,
            rating: 4.4,
            totalReviews: 123,
            description: "Kos syariah dekat kampus UNISMA. Lingkungan religius dan fasilitas memadai.",
            images: ["https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
            facilities: ["AC", "WiFi", "Kamar Mandi Dalam", "Mushola", "Parkir", "Laundry"],
            availability: "limited",
            featured: false
        }
    ],

    // Malang - Dekat Kawasan Perkantoran
    malang_work: [
        {
            id: "MLGW001",
            name: "Klojen Executive Apartment",
            location: "Jl. Kajoetangan No. 56, Klojen",
            area: "Klojen",
            type: "pasutri",
            price: 1800000,
            distance: 0.6,
            rating: 4.6,
            totalReviews: 167,
            description: "Apartemen modern di pusat kota Malang. Dekat dengan perkantoran dan pusat bisnis.",
            images: ["https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
            facilities: ["AC", "WiFi", "TV", "Kulkas", "Dapur", "Gym", "Pool", "Business Center"],
            availability: "available",
            featured: true
        },
        {
            id: "MLGW002",
            name: "Blimping Business House",
            location: "Jl. Mayjen Panjaitan No. 89, Blimbing",
            area: "Blimbing",
            type: "campur",
            price: 1500000,
            distance: 1.1,
            rating: 4.4,
            totalReviews: 134,
            description: "Townhouse untuk profesional di kawasan industri Blimbing. Fasilitas lengkap.",
            images: ["https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
            facilities: ["AC", "WiFi", "TV", "Kulkas", "Dapur", "Carport", "Garden", "Security"],
            availability: "available",
            featured: true
        }
    ]
};

// ===== DATA AREA =====
const AreaData = {
    jakarta: {
        campus: [
            { id: "jakarta_ui", name: "UI Depok", description: "Kawasan sekitar Universitas Indonesia Depok", kosCount: 45, avgPrice: 1200000 },
            { id: "jakarta_unj", name: "UNJ Rawamangun", description: "Area dekat Universitas Negeri Jakarta", kosCount: 32, avgPrice: 950000 },
            { id: "jakarta_atma", name: "Atma Jaya", description: "Sekitar Universitas Atma Jaya Jakarta", kosCount: 28, avgPrice: 1800000 },
            { id: "jakarta_binus", name: "BINUS Alam Sutera", description: "Kawasan kampus BINUS Alam Sutera", kosCount: 36, avgPrice: 1500000 },
            { id: "jakarta_trisakti", name: "Trisakti", description: "Area kampus Universitas Trisakti", kosCount: 25, avgPrice: 1300000 },
            { id: "jakarta_tarumanagara", name: "Tarumanagara", description: "Sekitar Universitas Tarumanagara", kosCount: 22, avgPrice: 1100000 },
            { id: "jakarta_uin", name: "UIN Jakarta", description: "Kawasan kampus UIN Syarif Hidayatullah", kosCount: 38, avgPrice: 850000 }
        ],
        work: [
            { id: "jakarta_sudirman", name: "Sudirman - Thamrin", description: "Kawasan perkantoran Sudirman-Thamrin", kosCount: 52, avgPrice: 3200000 },
            { id: "jakarta_kuningan", name: "Kuningan", description: "Kawasan bisnis Kuningan", kosCount: 48, avgPrice: 2800000 },
            { id: "jakarta_gatot", name: "Gatot Subroto", description: "Area perkantoran Gatot Subroto", kosCount: 35, avgPrice: 2000000 },
            { id: "jakarta_pluit", name: "Pluit - Penjaringan", description: "Kawasan Pluit dan Penjaringan", kosCount: 42, avgPrice: 2500000 },
            { id: "jakarta_cilandak", name: "Cilandak", description: "Area perkantoran Cilandak", kosCount: 28, avgPrice: 2200000 },
            { id: "jakarta_priok", name: "Tanjung Priok", description: "Kawasan industri Tanjung Priok", kosCount: 25, avgPrice: 1200000 }
        ]
    },
    surabaya: {
        campus: [
            { id: "surabaya_its", name: "ITS Sukolilo", description: "Kawasan sekitar ITS Sukolilo", kosCount: 38, avgPrice: 900000 },
            { id: "surabaya_unair", name: "UNAIR B", description: "Area kampus Universitas Airlangga B", kosCount: 42, avgPrice: 1000000 },
            { id: "surabaya_ub", name: "UB - UMM", description: "Sekitar Universitas Brawijaya dan UMM", kosCount: 35, avgPrice: 850000 },
            { id: "surabaya_upn", name: "UPN Veteran", description: "Kawasan kampus UPN Veteran", kosCount: 28, avgPrice: 800000 },
            { id: "surabaya_petra", name: "UK Petra", description: "Area sekitar Universitas Kristen Petra", kosCount: 25, avgPrice: 1200000 },
            { id: "surabaya_unusa", name: "Unusa", description: "Kawasan kampus Universitas Nahdlatul Ulama", kosCount: 22, avgPrice: 750000 }
        ],
        work: [
            { id: "surabaya_rungkut", name: "Rungkut Industri", description: "Kawasan industri Rungkut", kosCount: 45, avgPrice: 1300000 },
            { id: "surabaya_wonokromo", name: "Wonokromo", description: "Area bisnis Wonokromo", kosCount: 38, avgPrice: 1600000 },
            { id: "surabaya_wiyung", name: "Wiyung", description: "Kawasan industri Wiyung", kosCount: 32, avgPrice: 1400000 },
            { id: "surabaya_gununganyar", name: "Gunung Anyar", description: "Area industri Gunung Anyar", kosCount: 28, avgPrice: 1200000 },
            { id: "surabaya_sukolilo", name: "Sukolilo", description: "Kawasan perkantoran Sukolilo", kosCount: 35, avgPrice: 1700000 },
            { id: "surabaya_pabean", name: "Pabean Cantikan", description: "Area pelabuhan Pabean Cantikan", kosCount: 25, avgPrice: 1100000 }
        ]
    },
    yogyakarta: {
        campus: [
            { id: "yogyakarta_ugm", name: "UGM", description: "Kawasan sekitar Universitas Gadjah Mada", kosCount: 52, avgPrice: 850000 },
            { id: "yogyakarta_uii", name: "UII", description: "Area kampus Universitas Islam Indonesia", kosCount: 48, avgPrice: 950000 },
            { id: "yogyakarta_umy", name: "UMY", description: "Sekitar Universitas Muhammadiyah Yogyakarta", kosCount: 42, avgPrice: 800000 },
            { id: "yogyakarta_uny", name: "UNY", description: "Kawasan kampus Universitas Negeri Yogyakarta", kosCount: 38, avgPrice: 850000 },
            { id: "yogyakarta_amikom", name: "AMIKOM", description: "Area sekitar Universitas AMIKOM", kosCount: 35, avgPrice: 1200000 },
            { id: "yogyakarta_ust", name: "UST", description: "Kawasan kampus Universitas Sarjanawiyata", kosCount: 28, avgPrice: 750000 }
        ],
        work: [
            { id: "yogyakarta_sudirman", name: "Jl. Sudirman", description: "Kawasan perkantoran Jl. Sudirman", kosCount: 45, avgPrice: 2000000 },
            { id: "yogyakarta_seturan", name: "Seturan", description: "Area perkantoran Seturan", kosCount: 38, avgPrice: 1800000 },
            { id: "yogyakarta_gejayan", name: "Gejayan", description: "Kawasan bisnis Gejayan", kosCount: 32, avgPrice: 1600000 },
            { id: "yogyakarta_maguwo", name: "Maguwoharjo", description: "Area perkantoran Maguwoharjo", kosCount: 28, avgPrice: 1400000 },
            { id: "yogyakarta_gamping", name: "Gamping", description: "Kawasan industri Gamping", kosCount: 25, avgPrice: 1200000 },
            { id: "yogyakarta_banguntapan", name: "Banguntapan", description: "Area perkantoran Banguntapan", kosCount: 22, avgPrice: 1300000 }
        ]
    },
    malang: {
        campus: [
            { id: "malang_ub", name: "UB", description: "Kawasan sekitar Universitas Brawijaya", kosCount: 48, avgPrice: 800000 },
            { id: "malang_umm", name: "UMM", description: "Area kampus Universitas Muhammadiyah Malang", kosCount: 42, avgPrice: 850000 },
            { id: "malang_polinema", name: "Polinema", description: "Sekitar Politeknik Negeri Malang", kosCount: 38, avgPrice: 750000 },
            { id: "malang_unisma", name: "UNISMA", description: "Kawasan kampus Universitas Islam Malang", kosCount: 35, avgPrice: 800000 },
            { id: "malang_itn", name: "ITN", description: "Area sekitar Institut Teknologi Nasional", kosCount: 28, avgPrice: 700000 },
            { id: "malang_um", name: "UM", description: "Kawasan kampus Universitas Merdeka", kosCount: 25, avgPrice: 900000 }
        ],
        work: [
            { id: "malang_klojen", name: "Klojen", description: "Kawasan perkantoran Klojen", kosCount: 42, avgPrice: 1700000 },
            { id: "malang_blimbing", name: "Blimbing", description: "Area perkantoran Blimbing", kosCount: 38, avgPrice: 1500000 },
            { id: "malang_lowokwaru", name: "Lowokwaru", description: "Kawasan perkantoran Lowokwaru", kosCount: 35, avgPrice: 1400000 },
            { id: "malang_sukun", name: "Sukun", description: "Area industri Sukun", kosCount: 28, avgPrice: 1200000 },
            { id: "malang_kedungkandang", name: "Kedungkandang", description: "Kawasan industri Kedungkandang", kosCount: 25, avgPrice: 1100000 },
            { id: "malang_dinoyo", name: "Dinoyo", description: "Area perkantoran Dinoyo", kosCount: 22, avgPrice: 1300000 }
        ]
    }
};

// ===== FUNGSI UTILITAS =====
const Utils = {
    formatPrice: (price) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(price);
    },

    formatDistance: (distance) => {
        return `${distance} km`;
    },

    generateStarRating: (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
        
        let stars = '';
        for (let i = 0; i < fullStars; i++) stars += '<i class="fas fa-star"></i>';
        if (halfStar) stars += '<i class="fas fa-star-half-alt"></i>';
        for (let i = 0; i < emptyStars; i++) stars += '<i class="far fa-star"></i>';
        
        return stars;
    },

    getKostTypeLabel: (type) => {
        const labels = {
            'putra': 'Putra',
            'putri': 'Putri',
            'campur': 'Campur',
            'pasutri': 'Pasutri'
        };
        return labels[type] || type;
    },

    getAvailabilityLabel: (status) => {
        const labels = {
            'available': 'Tersedia',
            'limited': 'Terbatas',
            'soon': 'Segera Tersedia'
        };
        return labels[status] || status;
    },

    getCityName: (cityId) => {
        const names = {
            'jakarta': 'Jakarta',
            'surabaya': 'Surabaya',
            'yogyakarta': 'Yogyakarta',
            'malang': 'Malang'
        };
        return names[cityId] || cityId;
    }
};

// ===== FUNGSI PENGELOLAAN STATE =====
const StateManager = {
    initialize: () => {
        // Set default user
        AppState.currentUser = { ...AppConfig.DEFAULT_USER };
        
        // Load from localStorage jika ada
        const savedState = localStorage.getItem('carikost_state');
        if (savedState) {
            const parsed = JSON.parse(savedState);
            AppState.currentUser = parsed.currentUser || AppState.currentUser;
        }
        
        // Update UI
        StateManager.updateUserUI();
    },

    saveState: () => {
        localStorage.setItem('carikost_state', JSON.stringify({
            currentUser: AppState.currentUser
        }));
    },

    updateUserUI: () => {
        const userNameElements = document.querySelectorAll('#userName, #userGreeting, #userGreeting2, #userGreeting3');
        userNameElements.forEach(el => {
            if (el.id === 'userName') {
                el.textContent = AppState.currentUser.name;
            } else {
                el.textContent = `Halo, ${AppState.currentUser.name.split(' ')[0]}!`;
            }
        });
    },

    navigateTo: (pageId) => {
        // Sembunyikan semua halaman
        document.querySelectorAll('.app-page, .login-page').forEach(page => {
            page.classList.remove('active-page');
        });
        
        // Tampilkan halaman target
        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.add('active-page');
            AppState.currentPage = pageId;
            
            // Scroll ke atas
            window.scrollTo(0, 0);
            
            // Update UI berdasarkan halaman
            switch(pageId) {
                case 'cityPage':
                    CityPage.render();
                    break;
                case 'areaPage':
                    AreaPage.render();
                    break;
                case 'kostListPage':
                    KostListPage.render();
                    break;
            }
        }
    },

    setSelectedCity: (cityId) => {
        AppState.selectedCity = cityId;
        localStorage.setItem('selected_city', cityId);
    },

    setSelectedArea: (areaId) => {
        AppState.selectedArea = areaId;
        localStorage.setItem('selected_area', areaId);
    },

    setSelectedAreaType: (type) => {
        AppState.selectedAreaType = type;
    },

    updateFilters: (newFilters) => {
        AppState.currentFilters = { ...AppState.currentFilters, ...newFilters };
        KostListPage.applyFilters();
    }
};

// ===== MODUL HALAMAN KOTA =====
const CityPage = {
    render: () => {
        // Update statistik
        const cityStats = {
            jakarta: 1245,
            surabaya: 892,
            yogyakarta: 1532,
            malang: 756
        };

        // Tambahkan event listeners untuk kartu kota
        document.querySelectorAll('.city-card').forEach(card => {
            card.addEventListener('click', (e) => {
                if (!e.target.classList.contains('city-select-btn')) {
                    const cityId = card.dataset.city;
                    CityPage.selectCity(cityId);
                }
            });
        });

        document.querySelectorAll('.city-select-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const cityCard = btn.closest('.city-card');
                const cityId = cityCard.dataset.city;
                CityPage.selectCity(cityId);
            });
        });
    },

    selectCity: (cityId) => {
        if (AppConfig.SUPPORTED_CITIES.includes(cityId)) {
            StateManager.setSelectedCity(cityId);
            
            // Update UI
            const cityName = Utils.getCityName(cityId);
            document.getElementById('selectedCityName').textContent = cityName;
            document.getElementById('selectedCityName2').textContent = cityName;
            document.getElementById('selectedCityDisplay').textContent = cityName;
            document.getElementById('cityForDescription').textContent = cityName;
            document.getElementById('currentCityName').textContent = cityName;
            document.getElementById('currentAreaCity').textContent = cityName;
            document.getElementById('listCityName').textContent = cityName;
            
            // Navigate ke halaman area
            StateManager.navigateTo('areaPage');
        }
    }
};

// ===== MODUL HALAMAN AREA =====
const AreaPage = {
    render: () => {
        if (!AppState.selectedCity) {
            StateManager.navigateTo('cityPage');
            return;
        }

        const cityName = Utils.getCityName(AppState.selectedCity);
        document.getElementById('selectedCityDisplay').textContent = cityName;
        document.getElementById('cityForDescription').textContent = cityName;

        // Load areas untuk kota yang dipilih
        AreaPage.loadAreas();
        
        // Setup event listeners
        AreaPage.setupEventListeners();
    },

    loadAreas: () => {
        const cityData = AreaData[AppState.selectedCity];
        if (!cityData) return;

        const areas = cityData[AppState.selectedAreaType];
        const areasGrid = document.getElementById('areasGrid');
        const areasCount = document.getElementById('areasCount');
        
        if (!areas || areas.length === 0) {
            areasGrid.innerHTML = '';
            areasCount.textContent = '0 Area Tersedia';
            document.getElementById('areasEmpty').style.display = 'block';
            return;
        }

        // Update count
        areasCount.textContent = `${areas.length} Area Tersedia`;
        
        // Render area cards
        let html = '';
        areas.forEach(area => {
            html += `
                <div class="area-card" data-area-id="${area.id}">
                    <h3>${area.name}</h3>
                    <p>${area.description}</p>
                    <div class="area-meta">
                        <span class="kos-count">${area.kosCount} Kos</span>
                        <span class="average-price">${Utils.formatPrice(area.avgPrice)}/bulan</span>
                    </div>
                    <div class="area-features">
                        <span class="area-feature">
                            <i class="fas fa-wifi"></i> WiFi
                        </span>
                        <span class="area-feature">
                            <i class="fas fa-parking"></i> Parkir
                        </span>
                        <span class="area-feature">
                            <i class="fas fa-utensils"></i> Dapur
                        </span>
                    </div>
                    <button class="area-select-btn">
                        <i class="fas fa-search"></i> Lihat Kos
                    </button>
                </div>
            `;
        });

        areasGrid.innerHTML = html;
        document.getElementById('areasEmpty').style.display = 'none';

        // Add event listeners to area cards
        document.querySelectorAll('.area-card').forEach(card => {
            card.addEventListener('click', (e) => {
                if (!e.target.classList.contains('area-select-btn')) {
                    const areaId = card.dataset.areaId;
                    AreaPage.selectArea(areaId);
                }
            });
        });

        document.querySelectorAll('.area-select-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const areaCard = btn.closest('.area-card');
                const areaId = areaCard.dataset.areaId;
                AreaPage.selectArea(areaId);
            });
        });
    },

    selectArea: (areaId) => {
        const cityData = AreaData[AppState.selectedCity];
        const areas = [...cityData.campus, ...cityData.work];
        const selectedArea = areas.find(area => area.id === areaId);
        
        if (selectedArea) {
            StateManager.setSelectedArea(areaId);
            
            // Update UI
            document.getElementById('currentAreaName').textContent = selectedArea.name;
            document.getElementById('listAreaName').textContent = selectedArea.name;
            document.getElementById('currentLocation').textContent = `${selectedArea.name}, ${Utils.getCityName(AppState.selectedCity)}`;
            
            // Navigate ke halaman daftar kos
            StateManager.navigateTo('kostListPage');
        }
    },

    setupEventListeners: () => {
        // Area type tabs
        document.querySelectorAll('.type-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                document.querySelectorAll('.type-tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                const type = tab.dataset.type;
                StateManager.setSelectedAreaType(type);
                
                // Update description
                const cityName = Utils.getCityName(AppState.selectedCity);
                const description = type === 'campus' 
                    ? `Rekomendasi kos terdekat dengan kampus-kampus ternama di ${cityName}`
                    : `Rekomendasi kos strategis dekat kawasan pekerjaan di ${cityName}`;
                
                document.getElementById('typeDescription').textContent = description;
                
                // Reload areas
                AreaPage.loadAreas();
            });
        });

        // Search filter
        const areaSearch = document.getElementById('areaSearch');
        if (areaSearch) {
            areaSearch.addEventListener('input', (e) => {
                const searchTerm = e.target.value.toLowerCase();
                const areaCards = document.querySelectorAll('.area-card');
                
                areaCards.forEach(card => {
                    const title = card.querySelector('h3').textContent.toLowerCase();
                    const description = card.querySelector('p').textContent.toLowerCase();
                    
                    if (title.includes(searchTerm) || description.includes(searchTerm)) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        }

        // Sort filter
        const areaSort = document.getElementById('areaSort');
        if (areaSort) {
            areaSort.addEventListener('change', (e) => {
                // Implement sorting logic here
                console.log('Sort by:', e.target.value);
            });
        }

        // View toggle
        document.querySelectorAll('.view-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                const view = btn.dataset.view;
                const areasGrid = document.getElementById('areasGrid');
                
                if (view === 'list') {
                    areasGrid.classList.add('list-view');
                } else {
                    areasGrid.classList.remove('list-view');
                }
            });
        });
    }
};

// ===== MODUL HALAMAN DAFTAR KOS =====
const KostListPage = {
    render: () => {
        if (!AppState.selectedCity || !AppState.selectedArea) {
            StateManager.navigateTo('cityPage');
            return;
        }

        // Load kos data
        KostListPage.loadKostData();
        
        // Setup filter event listeners
        KostListPage.setupFilterListeners();
        
        // Apply initial filters
        KostListPage.applyFilters();
    },

    loadKostData: () => {
        const cityKey = AppState.selectedCity;
        const areaType = AppState.selectedAreaType;
        const dataKey = `${cityKey}_${areaType}`;
        
        AppState.searchResults = KostData[dataKey] || [];
        
        // Update total count
        const totalCount = AppState.searchResults.length;
        document.getElementById('totalKosCount').textContent = totalCount;
        document.getElementById('showingResults').textContent = `Menampilkan ${Math.min(12, totalCount)} dari ${totalCount} hasil`;
    },

    setupFilterListeners: () => {
        // Price range slider
        const priceMin = document.getElementById('priceMin');
        const priceMax = document.getElementById('priceMax');
        const minPriceDisplay = document.getElementById('minPriceDisplay');
        const maxPriceDisplay = document.getElementById('maxPriceDisplay');

        const updatePriceDisplay = () => {
            const min = parseInt(priceMin.value);
            const max = parseInt(priceMax.value);
            
            minPriceDisplay.textContent = Utils.formatPrice(min);
            maxPriceDisplay.textContent = Utils.formatPrice(max);
            
            StateManager.updateFilters({
                minPrice: min,
                maxPrice: max
            });
        };

        if (priceMin && priceMax) {
            priceMin.addEventListener('input', updatePriceDisplay);
            priceMax.addEventListener('input', updatePriceDisplay);
        }

        // Price presets
        document.querySelectorAll('.price-preset').forEach(preset => {
            preset.addEventListener('click', () => {
                const min = parseInt(preset.dataset.min);
                const max = parseInt(preset.dataset.max);
                
                if (priceMin && priceMax) {
                    priceMin.value = min;
                    priceMax.value = max;
                    updatePriceDisplay();
                }
            });
        });

        // Kost type checkboxes
        document.querySelectorAll('input[name="kost-type"]').forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                const selectedTypes = Array.from(document.querySelectorAll('input[name="kost-type"]:checked'))
                    .map(cb => cb.value);
                
                StateManager.updateFilters({
                    kostType: selectedTypes
                });
            });
        });

        // Distance radio buttons
        document.querySelectorAll('input[name="distance"]').forEach(radio => {
            radio.addEventListener('change', () => {
                if (radio.checked) {
                    StateManager.updateFilters({
                        maxDistance: parseFloat(radio.value)
                    });
                }
            });
        });

        // Rating radio buttons
        document.querySelectorAll('input[name="rating"]').forEach(radio => {
            radio.addEventListener('change', () => {
                if (radio.checked) {
                    StateManager.updateFilters({
                        minRating: parseFloat(radio.value)
                    });
                }
            });
        });

        // Facility checkboxes
        document.querySelectorAll('input[name="facility"]').forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                const selectedFacilities = Array.from(document.querySelectorAll('input[name="facility"]:checked'))
                    .map(cb => cb.value);
                
                StateManager.updateFilters({
                    facilities: selectedFacilities
                });
            });
        });

        // Apply filters button
        const applyFiltersBtn = document.getElementById('applyFilters');
        if (applyFiltersBtn) {
            applyFiltersBtn.addEventListener('click', () => {
                KostListPage.applyFilters();
            });
        }

        // Clear all filters
        const clearFiltersBtn = document.getElementById('clearAllFilters');
        if (clearFiltersBtn) {
            clearFiltersBtn.addEventListener('click', () => {
                KostListPage.resetFilters();
            });
        }

        // Sort dropdown
        const sortBy = document.getElementById('sortBy');
        if (sortBy) {
            sortBy.addEventListener('change', () => {
                KostListPage.applyFilters();
            });
        }

        // View toggle
        document.querySelectorAll('.view-btn[data-view]').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                const view = btn.dataset.view;
                const listingsView = document.getElementById('listingsView');
                
                listingsView.className = 'listings-view';
                if (view === 'list') {
                    listingsView.classList.add('list-view');
                } else if (view === 'map') {
                    listingsView.classList.add('map-view');
                    // Implement map view here
                }
            });
        });

        // Reset search button
        const resetSearchBtn = document.getElementById('resetSearchBtn');
        if (resetSearchBtn) {
            resetSearchBtn.addEventListener('click', () => {
                KostListPage.resetFilters();
            });
        }
    },

    applyFilters: () => {
        let filteredKost = [...AppState.searchResults];
        const filters = AppState.currentFilters;
        const sortBy = document.getElementById('sortBy')?.value || 'recommended';

        // Apply kost type filter
        if (filters.kostType.length > 0) {
            filteredKost = filteredKost.filter(kost => 
                filters.kostType.includes(kost.type)
            );
        }

        // Apply price filter
        filteredKost = filteredKost.filter(kost => 
            kost.price >= filters.minPrice && kost.price <= filters.maxPrice
        );

        // Apply distance filter
        filteredKost = filteredKost.filter(kost => 
            kost.distance <= filters.maxDistance
        );

        // Apply rating filter
        filteredKost = filteredKost.filter(kost => 
            kost.rating >= filters.minRating
        );

        // Apply facilities filter
        if (filters.facilities.length > 0) {
            filteredKost = filteredKost.filter(kost => {
                return filters.facilities.every(facility => 
                    kost.facilities.includes(facility)
                );
            });
        }

        // Apply sorting
        switch(sortBy) {
            case 'price-asc':
                filteredKost.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                filteredKost.sort((a, b) => b.price - a.price);
                break;
            case 'rating':
                filteredKost.sort((a, b) => b.rating - a.rating);
                break;
            case 'distance':
                filteredKost.sort((a, b) => a.distance - b.distance);
                break;
            case 'newest':
                // Assuming newer kos have higher IDs
                filteredKost.sort((a, b) => b.id.localeCompare(a.id));
                break;
            default: // 'recommended'
                // Sort by rating first, then distance
                filteredKost.sort((a, b) => {
                    if (b.rating !== a.rating) {
                        return b.rating - a.rating;
                    }
                    return a.distance - b.distance;
                });
        }

        // Update results count
        const showingCount = Math.min(12, filteredKost.length);
        document.getElementById('showingResults').textContent = 
            `Menampilkan ${showingCount} dari ${filteredKost.length} hasil`;

        // Render results
        KostListPage.renderResults(filteredKost.slice(0, 12));
    },

    renderResults: (kostList) => {
        const listingsView = document.getElementById('listingsView');
        const emptyResults = document.getElementById('emptyResults');
        
        if (kostList.length === 0) {
            listingsView.innerHTML = '';
            emptyResults.style.display = 'block';
            return;
        }
        
        emptyResults.style.display = 'none';
        
        let html = '';
        kostList.forEach(kost => {
            const ratingStars = Utils.generateStarRating(kost.rating);
            const priceFormatted = Utils.formatPrice(kost.price);
            const distanceFormatted = Utils.formatDistance(kost.distance);
            const typeLabel = Utils.getKostTypeLabel(kost.type);
            const availabilityLabel = Utils.getAvailabilityLabel(kost.availability);
            
            // Get first 3 facilities
            const facilitiesPreview = kost.facilities.slice(0, 3);
            const remainingFacilities = kost.facilities.length - 3;
            
            html += `
                <div class="kost-card" data-kost-id="${kost.id}">
                    <div class="kost-image">
                        <img src="${kost.images[0]}" alt="${kost.name}">
                        ${kost.featured ? '<span class="kost-badge"><i class="fas fa-crown"></i> Featured</span>' : ''}
                        <span class="kost-badge" style="left: 15px; right: auto; background: ${kost.availability === 'available' ? '#38B000' : '#FF9F1C'}">
                            ${availabilityLabel}
                        </span>
                    </div>
                    <div class="kost-content">
                        <h3 class="kost-title">${kost.name}</h3>
                        <div class="kost-location">
                            <i class="fas fa-map-marker-alt"></i>
                            <span>${kost.location}</span>
                        </div>
                        <div class="kost-features">
                            <div class="feature-item">
                                <i class="fas fa-home"></i>
                                <span>${typeLabel}</span>
                            </div>
                            <div class="feature-item">
                                <i class="fas fa-walking"></i>
                                <span>${distanceFormatted}</span>
                            </div>
                            <div class="feature-item">
                                <i class="fas fa-star"></i>
                                <span>${kost.rating} (${kost.totalReviews})</span>
                            </div>
                        </div>
                        <div class="kost-price">
                            ${priceFormatted}<span>/bulan</span>
                        </div>
                        <div class="kost-facilities">
                            ${facilitiesPreview.map(facility => `
                                <span class="facility-tag">${facility}</span>
                            `).join('')}
                            ${remainingFacilities > 0 ? `<span class="facility-more">+${remainingFacilities} more</span>` : ''}
                        </div>
                        <div class="kost-actions">
                            <button class="action-btn btn-detail" onclick="KostListPage.showDetail('${kost.id}')">
                                <i class="fas fa-info-circle"></i> Detail
                            </button>
                            <button class="action-btn btn-contact" onclick="PaymentModal.show('${kost.id}', 'contact')">
                                <i class="fas fa-phone-alt"></i> Kontak
                            </button>
                            <button class="action-btn btn-rent" onclick="PaymentModal.show('${kost.id}', 'rent')">
                                <i class="fas fa-key"></i> Sewa
                            </button>
                        </div>
                    </div>
                </div>
            `;
        });
        
        listingsView.innerHTML = html;
    },

    showDetail: (kostId) => {
        // Find kost data
        const cityKey = AppState.selectedCity;
        const areaType = AppState.selectedAreaType;
        const dataKey = `${cityKey}_${areaType}`;
        const kostData = KostData[dataKey];
        
        if (!kostData) return;
        
        const kost = kostData.find(k => k.id === kostId);
        if (!kost) return;
        
        // Show detail in modal
        const ratingStars = Utils.generateStarRating(kost.rating);
        const priceFormatted = Utils.formatPrice(kost.price);
        const typeLabel = Utils.getKostTypeLabel(kost.type);
        const availabilityLabel = Utils.getAvailabilityLabel(kost.availability);
        
        let html = `
            <div class="kost-detail-modal">
                <div class="detail-header">
                    <div class="detail-images">
                        <img src="${kost.images[0]}" alt="${kost.name}" class="main-image">
                    </div>
                    <div class="detail-info">
                        <h2>${kost.name}</h2>
                        <p class="detail-location">
                            <i class="fas fa-map-marker-alt"></i> ${kost.location}
                        </p>
                        <div class="detail-meta">
                            <span class="meta-item">
                                <i class="fas fa-home"></i> ${typeLabel}
                            </span>
                            <span class="meta-item">
                                <i class="fas fa-walking"></i> ${kost.distance} km
                            </span>
                            <span class="meta-item">
                                <i class="fas fa-star"></i> ${kost.rating} (${kost.totalReviews} reviews)
                            </span>
                        </div>
                        <div class="detail-price">
                            ${priceFormatted}<span>/bulan</span>
                        </div>
                        <div class="detail-availability ${kost.availability}">
                            <i class="fas fa-circle"></i> ${availabilityLabel}
                        </div>
                    </div>
                </div>
                
                <div class="detail-section">
                    <h3><i class="fas fa-align-left"></i> Deskripsi</h3>
                    <p>${kost.description}</p>
                </div>
                
                <div class="detail-section">
                    <h3><i class="fas fa-couch"></i> Fasilitas</h3>
                    <div class="facilities-grid">
                        ${kost.facilities.map(facility => `
                            <div class="facility-item">
                                <i class="fas fa-check"></i> ${facility}
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                ${kost.rules && kost.rules.length > 0 ? `
                <div class="detail-section">
                    <h3><i class="fas fa-clipboard-list"></i> Peraturan</h3>
                    <ul class="rules-list">
                        ${kost.rules.map(rule => `
                            <li><i class="fas fa-circle"></i> ${rule}</li>
                        `).join('')}
                    </ul>
                </div>
                ` : ''}
                
                ${kost.owner ? `
                <div class="detail-section">
                    <h3><i class="fas fa-user-tie"></i> Pemilik Kos</h3>
                    <div class="owner-info">
                        <div class="owner-details">
                            <h4>${kost.owner.name}</h4>
                            <p><i class="fas fa-phone"></i> ${kost.owner.phone}</p>
                            <p><i class="fas fa-star"></i> Rating: ${kost.owner.rating}/5.0</p>
                        </div>
                    </div>
                </div>
                ` : ''}
                
                <div class="detail-actions">
                    <button class="btn-secondary" onclick="PaymentModal.show('${kost.id}', 'contact')">
                        <i class="fas fa-phone-alt"></i> Dapatkan Kontak (Rp 25.000)
                    </button>
                    <button class="btn-primary" onclick="PaymentModal.show('${kost.id}', 'survey')">
                        <i class="fas fa-clipboard-check"></i> Survey Kos (Rp 150.000)
                    </button>
                    <button class="btn-success" onclick="PaymentModal.show('${kost.id}', 'rent')">
                        <i class="fas fa-key"></i> Sewa Langsung (Rp 300.000)
                    </button>
                </div>
            </div>
        `;
        
        // Show modal
        const modal = document.getElementById('detailModal');
        const modalBody = modal.querySelector('.modal-body');
        modalBody.innerHTML = html;
        modal.style.display = 'block';
    },

    resetFilters: () => {
        // Reset all filter inputs
        document.querySelectorAll('input[name="kost-type"]').forEach(cb => cb.checked = false);
        document.querySelectorAll('input[name="facility"]').forEach(cb => cb.checked = false);
        
        const priceMin = document.getElementById('priceMin');
        const priceMax = document.getElementById('priceMax');
        if (priceMin && priceMax) {
            priceMin.value = 300000;
            priceMax.value = 3000000;
            
            const minPriceDisplay = document.getElementById('minPriceDisplay');
            const maxPriceDisplay = document.getElementById('maxPriceDisplay');
            if (minPriceDisplay && maxPriceDisplay) {
                minPriceDisplay.textContent = Utils.formatPrice(300000);
                maxPriceDisplay.textContent = Utils.formatPrice(3000000);
            }
        }
        
        document.querySelector('input[name="distance"][value="5"]').checked = true;
        document.querySelector('input[name="rating"][value="3"]').checked = true;
        
        document.getElementById('sortBy').value = 'recommended';
        
        // Reset state
        AppState.currentFilters = {
            kostType: [],
            minPrice: 300000,
            maxPrice: 3000000,
            maxDistance: 5,
            minRating: 3,
            facilities: []
        };
        
        // Re-apply filters
        KostListPage.applyFilters();
    }
};

// ===== MODUL MODAL PEMBAYARAN =====
const PaymentModal = {
    show: (kostId, serviceType) => {
        // Find kost data
        const cityKey = AppState.selectedCity;
        const areaType = AppState.selectedAreaType;
        const dataKey = `${cityKey}_${areaType}`;
        const kostData = KostData[dataKey];
        
        if (!kostData) return;
        
        const kost = kostData.find(k => k.id === kostId);
        if (!kost) return;
        
        // Set selected kost and service
        AppState.selectedKost = kost;
        AppState.selectedService = serviceType;
        
        // Update modal content
        document.getElementById('modalKostTitle').textContent = kost.name;
        document.getElementById('modalKostLocation').textContent = `${kost.location}`;
        document.getElementById('modalKostPrice').textContent = Utils.formatPrice(kost.price);
        
        // Set kost image
        const kostImage = document.getElementById('modalKostImage');
        kostImage.innerHTML = `<img src="${kost.images[0]}" alt="${kost.name}">`;
        
        // Select the correct payment option
        document.querySelectorAll('.payment-option').forEach(option => {
            option.classList.remove('selected');
            if (option.dataset.type === serviceType) {
                option.classList.add('selected');
            }
        });
        
        // Update payment summary
        const service = AppConfig.PAYMENT_SERVICES[serviceType.toUpperCase()];
        if (service) {
            document.getElementById('selectedService').textContent = service.name;
            document.getElementById('serviceFee').textContent = Utils.formatPrice(service.price);
            document.getElementById('totalPayment').textContent = Utils.formatPrice(service.price);
        }
        
        // Show modal
        const modal = document.getElementById('paymentModal');
        modal.style.display = 'block';
    },

    hide: () => {
        const modal = document.getElementById('paymentModal');
        modal.style.display = 'none';
        
        // Reset selection
        AppState.selectedKost = null;
        AppState.selectedService = null;
    },

    confirmPayment: () => {
        if (!AppState.selectedKost || !AppState.selectedService) {
            alert('Silakan pilih layanan terlebih dahulu');
            return;
        }
        
        const service = AppConfig.PAYMENT_SERVICES[AppState.selectedService.toUpperCase()];
        const paymentMethod = document.querySelector('input[name="payment-method"]:checked')?.value;
        
        if (!service || !paymentMethod) {
            alert('Silakan pilih metode pembayaran');
            return;
        }
        
        // Simulate payment processing
        const loadingHtml = `
            <div class="payment-processing">
                <div class="processing-spinner">
                    <i class="fas fa-spinner fa-spin"></i>
                </div>
                <h3>Memproses Pembayaran...</h3>
                <p>Harap tunggu sebentar</p>
            </div>
        `;
        
        const modalBody = document.querySelector('#paymentModal .modal-body');
        modalBody.innerHTML = loadingHtml;
        
        // Simulate API call
        setTimeout(() => {
            PaymentModal.showSuccess();
        }, 2000);
    },

    showSuccess: () => {
        const service = AppConfig.PAYMENT_SERVICES[AppState.selectedService.toUpperCase()];
        
        const successHtml = `
            <div class="payment-success">
                <div class="success-icon">
                    <i class="fas fa-check-circle"></i>
                </div>
                <h3>Pembayaran Berhasil!</h3>
                <div class="success-details">
                    <p><strong>Layanan:</strong> ${service.name}</p>
                    <p><strong>Kos:</strong> ${AppState.selectedKost.name}</p>
                    <p><strong>Jumlah:</strong> ${Utils.formatPrice(service.price)}</p>
                    <p><strong>Status:</strong> <span class="status-success">Sukses</span></p>
                </div>
                
                ${AppState.selectedService === 'contact' ? `
                <div class="contact-reveal">
                    <h4><i class="fas fa-phone-alt"></i> Nomor Kontak Pemilik</h4>
                    <div class="phone-number">
                        <i class="fas fa-phone"></i>
                        <span>${AppState.selectedKost.owner?.phone || '081234567890'}</span>
                    </div>
                    <p class="note"><i class="fas fa-info-circle"></i> Nomor ini akan aktif selama 30 hari</p>
                </div>
                ` : ''}
                
                ${AppState.selectedService === 'survey' ? `
                <div class="survey-info">
                    <h4><i class="fas fa-clipboard-check"></i> Jadwal Survey</h4>
                    <p>Tim kami akan menghubungi Anda dalam 1x24 jam untuk menjadwalkan survey.</p>
                    <p>Pastikan nomor telepon Anda aktif.</p>
                </div>
                ` : ''}
                
                ${AppState.selectedService === 'rent' ? `
                <div class="rent-info">
                    <h4><i class="fas fa-key"></i> Proses Sewa</h4>
                    <p>Tim kami akan memproses sewa dalam 1x24 jam.</p>
                    <p>Anda akan menerima email konfirmasi dan dokumen perjanjian sewa.</p>
                </div>
                ` : ''}
                
                <div class="success-actions">
                    <button class="btn-secondary" onclick="PaymentModal.hide()">
                        <i class="fas fa-times"></i> Tutup
                    </button>
                    <button class="btn-primary" onclick="window.print()">
                        <i class="fas fa-print"></i> Cetak Bukti
                    </button>
                </div>
            </div>
        `;
        
        const modalBody = document.querySelector('#paymentModal .modal-body');
        modalBody.innerHTML = successHtml;
    }
};

// ===== INISIALISASI APLIKASI =====
document.addEventListener('DOMContentLoaded', () => {
    // Initialize state
    StateManager.initialize();
    
    // Setup login form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            if (username && password) {
                // Update user name
                AppState.currentUser.name = username.split('@')[0] || 'Pengguna';
                AppState.currentUser.email = username;
                
                // Save state
                StateManager.saveState();
                StateManager.updateUserUI();
                
                // Navigate to city page
                StateManager.navigateTo('cityPage');
            } else {
                alert('Silakan isi username dan password');
            }
        });
    }
    
    // Setup password toggle
    const togglePassword = document.getElementById('togglePassword');
    if (togglePassword) {
        togglePassword.addEventListener('click', () => {
            const passwordInput = document.getElementById('password');
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            togglePassword.classList.toggle('fa-eye');
            togglePassword.classList.toggle('fa-eye-slash');
        });
    }
    
    // Setup register link
    const registerLink = document.getElementById('registerLink');
    if (registerLink) {
        registerLink.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Fitur pendaftaran akan segera hadir! Untuk saat ini, gunakan username dan password apa saja.');
        });
    }
    
    // Setup logout buttons
    document.querySelectorAll('.logout-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            if (confirm('Apakah Anda yakin ingin keluar?')) {
                // Clear state
                AppState.currentUser = null;
                AppState.selectedCity = null;
                AppState.selectedArea = null;
                AppState.searchResults = [];
                
                // Navigate to login page
                StateManager.navigateTo('loginPage');
                
                // Clear form
                const loginForm = document.getElementById('loginForm');
                if (loginForm) loginForm.reset();
            }
        });
    });
    
    // Setup back buttons
    const backToCity = document.getElementById('backToCity');
    if (backToCity) {
        backToCity.addEventListener('click', (e) => {
            e.preventDefault();
            StateManager.navigateTo('cityPage');
        });
    }
    
    const backToArea = document.getElementById('backToArea');
    if (backToArea) {
        backToArea.addEventListener('click', (e) => {
            e.preventDefault();
            StateManager.navigateTo('areaPage');
        });
    }
    
    const backToAreaPage = document.getElementById('backToAreaPage');
    if (backToAreaPage) {
        backToAreaPage.addEventListener('click', (e) => {
            e.preventDefault();
            StateManager.navigateTo('areaPage');
        });
    }
    
    const backToHome = document.getElementById('backToHome');
    if (backToHome) {
        backToHome.addEventListener('click', (e) => {
            e.preventDefault();
            StateManager.navigateTo('cityPage');
        });
    }
    
    // Setup breadcrumb links
    const breadcrumbCity = document.getElementById('breadcrumbCity');
    if (breadcrumbCity) {
        breadcrumbCity.addEventListener('click', (e) => {
            e.preventDefault();
            StateManager.navigateTo('cityPage');
        });
    }
    
    const breadcrumbArea = document.getElementById('breadcrumbArea');
    if (breadcrumbArea) {
        breadcrumbArea.addEventListener('click', (e) => {
            e.preventDefault();
            StateManager.navigateTo('areaPage');
        });
    }
    
    // Setup payment modal
    const closeModal = document.getElementById('closeModal');
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            PaymentModal.hide();
        });
    }
    
    const cancelPayment = document.getElementById('cancelPayment');
    if (cancelPayment) {
        cancelPayment.addEventListener('click', () => {
            PaymentModal.hide();
        });
    }
    
    const confirmPayment = document.getElementById('confirmPayment');
    if (confirmPayment) {
        confirmPayment.addEventListener('click', () => {
            PaymentModal.confirmPayment();
        });
    }
    
    // Setup detail modal close
    const closeDetailModal = document.getElementById('closeDetailModal');
    if (closeDetailModal) {
        closeDetailModal.addEventListener('click', () => {
            document.getElementById('detailModal').style.display = 'none';
        });
    }
    
    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        const paymentModal = document.getElementById('paymentModal');
        const detailModal = document.getElementById('detailModal');
        
        if (e.target === paymentModal) {
            PaymentModal.hide();
        }
        
        if (e.target === detailModal) {
            detailModal.style.display = 'none';
        }
    });
    
    // Setup social login buttons
    document.querySelectorAll('.social-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            alert('Login dengan media sosial akan segera hadir! Untuk saat ini, gunakan form login biasa.');
        });
    });
    
    // Setup save search button
    const saveSearchBtn = document.getElementById('saveSearchBtn');
    if (saveSearchBtn) {
        saveSearchBtn.addEventListener('click', () => {
            if (AppState.selectedCity && AppState.selectedArea) {
                alert('Pencarian telah disimpan! Anda dapat melihatnya di menu "Pencarian Tersimpan".');
            } else {
                alert('Silakan pilih kota dan area terlebih dahulu.');
            }
        });
    }
    
    // Setup share button
    const shareBtn = document.getElementById('shareBtn');
    if (shareBtn) {
        shareBtn.addEventListener('click', () => {
            if (navigator.share) {
                navigator.share({
                    title: 'CariKost - Temukan Kos Terbaik',
                    text: `Saya sedang mencari kos di ${AppState.selectedCity}. Lihat pilihan kos terbaiknya!`,
                    url: window.location.href
                });
            } else {
                alert('Berbagi link: ' + window.location.href);
            }
        });
    }
    
    // Setup demo notes
    const demoNote = document.querySelector('.demo-note');
    if (demoNote) {
        demoNote.addEventListener('click', () => {
            alert('DEMO APLIKASI\n\nUntuk mencoba aplikasi ini:\n1. Isi username/password apa saja (tidak boleh kosong)\n2. Pilih kota, area, dan kos\n3. Gunakan fitur pembayaran untuk melihat hasil\n\nSemua data adalah contoh untuk demo.');
        });
    }
    
    // Initialize city page if needed
    if (AppState.currentUser) {
        StateManager.navigateTo('cityPage');
    }
});

// ===== EKSPOR FUNGSI KE GLOBAL SCOPE =====
window.KostListPage = KostListPage;
window.PaymentModal = PaymentModal;
window.AreaPage = AreaPage;
window.CityPage = CityPage;
window.Utils = Utils;