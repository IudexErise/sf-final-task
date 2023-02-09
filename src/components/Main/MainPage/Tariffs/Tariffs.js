import React from "react";
import Tariff from "./Tariff/Tariff";
import styles from './Tariffs.module.css';
import tariffLogo1 from '../../../../assets/images/beginner.svg';
import tariffLogo2 from '../../../../assets/images/pro.svg';
import tariffLogo3 from '../../../../assets/images/business.svg';

const tarrifsArray = [
  {
    tariffName: 'beginner',
    tariffDescription: 'Для небольшого исследования',
    tariffLogo: tariffLogo1,
    currentTariff: true,
    deal: '799 ₽',
    price: '1 200 ₽',
    installment: true,
    installmentPayment: '150',
    perk1: 'Безлимитная история запросов',
    perk2: 'Безопасная сделка',
    perk3: 'Поддержка 24/7',
  },

  {
    tariffName: 'pro',
    tariffDescription: 'Для HR и фрилансеров',
    tariffLogo: tariffLogo2,
    currentTariff: false,
    deal: '1 299 ₽',
    price: '2 600 ₽',
    installment: true,
    installmentPayment: '279',
    perk1: 'Все пункты тарифа Beginner',
    perk2: 'Экспорт истории',
    perk3: 'Рекомендации по приоритетам',
  },

  {
    tariffName: 'business',
    tariffDescription: 'Для корпоративных клиентов',
    tariffLogo: tariffLogo3,
    currentTariff: false,
    deal: '2 379 ₽',
    price: '3 700 ₽',
    installment: false,
    installmentPayment: '150',
    perk1: 'Все пункты тарифа Pro',
    perk2: 'Безлимитное количество запросов',
    perk3: 'Приоритетная поддержка',
  },
]

let tarrifs = tarrifsArray.map((tariff) => {
  return (
    <Tariff 
      tariffName={tariff.tariffName}
      tariffDescription={tariff.tariffDescription}
      tariffLogo={tariff.tariffLogo}
      currentTariff={tariff.currentTariff}
      deal={tariff.deal}
      price={tariff.price}
      installment={tariff.installment}
      installmentPayment={tariff.installmentPayment}
      perk1={tariff.perk1}
      perk2={tariff.perk2}
      perk3={tariff.perk3}
    />
  )
})

export default function Tariffs() {
  return (
    <section className={styles.container} id='tariffs'>
      <h2 className={styles.headline}>Тарифы</h2>
      <div className={styles.items}>
        {tarrifs}
      </div>
    </section>
  )
}
