import Link from 'next/link';

export default function Home() {
  // Example array of local image paths with descriptions
  const productItems = [
    { src: '/img/1.jpg', description: 'Geek vape ' },
    { src: '/img/2.jpg', description: 'Geek vape pod' },
    { src: '/img/3.jpg', description: 'Geek vape pack' },
    { src: '/images/product4.jpg', description: 'Description for Product 4' },
    { src: '/images/product5.jpg', description: 'Description for Product 5' },
    { src: '/images/product6.jpg', description: 'Description for Product 6' },
    { src: '/images/product7.jpg', description: 'Description for Product 7' },
    { src: '/images/product8.jpg', description: 'Description for Product 8' },
    { src: '/images/product9.jpg', description: 'Description for Product 9' },
    { src: '/images/product10.jpg', description: 'Description for Product 10' },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#FFA500', padding: '10px 20px' }}>
        <h1 style={{ color: 'black', fontSize: '24px', fontWeight: 'bold', margin: 0 }}>MAKJEGAGIK SHOP</h1>
        
        <Link href="/login">
          <button style={{ padding: '8px 16px', backgroundColor: 'black', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Login
          </button>
        </Link>
      </header>
      
      <main style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '20px', marginTop: '20px' }}>
        {productItems.map((item, index) => (
          <div key={index} style={{ border: '1px solid #ccc', padding: '10px', display: 'flex', flexDirection: 'column', height: '300px' }}>
            <img 
              src={item.src} 
              alt={`Product ${index + 1}`} 
              style={{ width: '200px', height: 'auto', objectFit: 'cover', marginBottom: '10px' }} 
            />
            <div style={{ marginTop: 'auto', textAlign: 'center', fontSize: '14px', color: '#333' }}>
              {item.description}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}