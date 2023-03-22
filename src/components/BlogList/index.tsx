import { ColumnCard } from '../Card';

const arrBlogList = [
  {
    img: 'https://res.cloudinary.com/ngocxxu/image/upload/v1679452328/reactjs-test/column-1_zzxxwl.jpg',
    time: '2021.05.17   23:25',
    content: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
    hashtag: '#魚料理  #和食  #DHA',
  },
  {
    img: 'https://res.cloudinary.com/ngocxxu/image/upload/v1679452329/reactjs-test/column-2_cdslol.jpg',
    time: '2021.05.17   23:25',
    content: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
    hashtag: '#魚料理  #和食  #DHA',
  },
  {
    img: 'https://res.cloudinary.com/ngocxxu/image/upload/v1679452329/reactjs-test/column-3_gtsrg8.jpg',
    time: '2021.05.17   23:25',
    content: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
    hashtag: '#魚料理  #和食  #DHA',
  },
  {
    img: 'https://res.cloudinary.com/ngocxxu/image/upload/v1679452329/reactjs-test/column-4_bq2ws9.jpg',
    time: '2021.05.17   23:25',
    content: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
    hashtag: '#魚料理  #和食  #DHA',
  },
  {
    img: 'https://res.cloudinary.com/ngocxxu/image/upload/v1679452329/reactjs-test/column-5_z1uoll.jpg',
    time: '2021.05.17   23:25',
    content: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
    hashtag: '#魚料理  #和食  #DHA',
  },
  {
    img: 'https://res.cloudinary.com/ngocxxu/image/upload/v1679452329/reactjs-test/column-6_oka7ym.jpg',
    time: '2021.05.17   23:25',
    content: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
    hashtag: '#魚料理  #和食  #DHA',
  },
  {
    img: 'https://res.cloudinary.com/ngocxxu/image/upload/v1679452327/reactjs-test/column-7_s217lg.jpg',
    time: '2021.05.17   23:25',
    content: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
    hashtag: '#魚料理  #和食  #DHA',
  },
  {
    img: 'https://res.cloudinary.com/ngocxxu/image/upload/v1679452327/reactjs-test/column-8_rzbpkb.jpg',
    time: '2021.05.17   23:25',
    content: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
    hashtag: '#魚料理  #和食  #DHA',
  },
];

export const BlogList = () => {
  return (
    <div className='mt-16 flex gap-2 flex-wrap'>
      {arrBlogList.map((item, idx) => (
        <ColumnCard {...item} key={idx} />
      ))}
    </div>
  );
};
