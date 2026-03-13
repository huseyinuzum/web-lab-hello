import React from 'react';
import { Button, Input, Card, Alert } from '../components/ui';

const UIKit: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 px-6 py-10">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-6">UI Kit</h1>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Butonlar</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Birincil</Button>
            <Button variant="secondary">İkincil</Button>
            <Button variant="danger">Tehlike</Button>
            <Button variant="ghost">Ghost</Button>
            <Button size="sm">Küçük</Button>
            <Button size="md">Orta</Button>
            <Button size="lg">Büyük</Button>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Giriş Alanları</h2>
          <div className="space-y-4 max-w-md">
            <Input id="normal" label="Normal" placeholder="Yazın..." />
            <Input id="error" label="Hata" placeholder="Yazın..." error="Bu alan zorunlu" />
            <Input id="help" label="Yardımcı Metin" placeholder="Yazın..." helpText="Buraya ek bilgi yazabilirsiniz." />
            <Input id="disabled" label="Devre Dışı" placeholder="Yazamazsınız" disabled />
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Kartlar</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card title="Elevated" variant="elevated">
              Yükseltilmiş kart örneği.
            </Card>
            <Card title="Outlined" variant="outlined">
              Çerçeveli kart örneği.
            </Card>
            <Card title="Filled" variant="filled">
              Dolu kart örneği.
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Uyarılar</h2>
          <div className="space-y-4 max-w-md">
            <Alert variant="info" title="Bilgi" dismissible>
              Bilgilendirici bir uyarı mesajı.
            </Alert>
            <Alert variant="success" title="Başarılı" dismissible>
              İşlem başarıyla tamamlandı.
            </Alert>
            <Alert variant="warning" title="Uyarı" dismissible>
              Lütfen formu kontrol edin.
            </Alert>
            <Alert variant="error" title="Hata" dismissible>
              Bir hata oluştu.
            </Alert>
          </div>
        </section>
      </div>
    </div>
  );
};

export default UIKit;
