export const DiaryList = () => {
  return (
    <div>
      <p className='font-[400] text-[22px] leading-[27px] tracking-[.11px] mb-2'>
        MY DIARY
      </p>
      <div className='flex gap-2 flex-wrap'>
        {Array(8)
          .fill(0)
          .map((_, idx) => (
            <div
              className='w-[234px] h-[234px] border-black border-2 p-2.5'
              key={idx}
            >
              <p className='font-[400] text-[18px] leading-[22px] tracking-[.09px]'>
                2021.05.21 <br /> 23:25
              </p>
              <p className='font-[300] text-[12px] leading-[17px] tracking-[.06px] mt-2'>
                私の日記の記録が一部表示されます。
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};
