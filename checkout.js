import { useState } from 'react';

export default function Checkout() {
  const [quantity, setQuantity] = useState(1);
  const price = 500000;
  const shipping = 10000;
  const total = price * quantity + shipping;

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px', border: '1px solid #ddd', borderRadius: '5px' }}>
      <h2>Atur Jumlah</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
        <span>{quantity}</span>
        <button onClick={() => setQuantity(quantity + 1)}>+</button>
      </div>
      <p>Subtotal: {price * quantity.toLocaleString('id-ID')}</p>

      <h3>Alamat Pengiriman</h3>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input type="text" placeholder="Provinsi" style={{ padding: '8px' }} required />
        <input type="text" placeholder="Kota / Kabupaten" style={{ padding: '8px' }} required />
        <input type="text" placeholder="Kurir" style={{ padding: '8px' }} required />
        <input type="text" placeholder="Layanan" style={{ padding: '8px' }} required />
        <textarea placeholder="Alamat" style={{ padding: '8px', resize: 'vertical' }} required></textarea>
      </form>
      
      <p>Ongkir: {shipping.toLocaleString('id-ID')}</p>
      <p>Total: {total.toLocaleString('id-ID')}</p>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
        <button style={{ padding: '10px', backgroundColor: '#007bff', color: '#fff' }}>KERANJANG</button>
        <button style={{ padding: '10px', border: '1px solid #007bff', color: '#007bff' }}>BELI</button>
      </div>
    </div>
  );
}
