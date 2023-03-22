const arrContentFooter = [
  '会員登録',
  '運営会社',
  '利用規約',
  '個人情報の取扱について',
  '特定商取引法に基づく表記',
  'お問い合わせ',
];
const Footer = () => {
  return (
    <div className='bg-dark500text mt-16'>
      <div className='w-[960px] h-[128px] flex items-center mx-auto gap-12'>
        {arrContentFooter.map((item, idx) => (
          <p
            key={idx}
            className='cursor-pointer font-[300] text-[11px] leading-[16px] tracking-[.033px] text-light'
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Footer;
