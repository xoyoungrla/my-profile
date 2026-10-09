const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  const profileData = {
    name: '김태영',
    studentId: '202508081',
    department: '정보통신공학과',
    mbti: 'istp', 
    intro: '안녕하세요! C언어, 자바 프로그래밍, 파이썬, WSL, 아두이노를 배우고 있는 학생입니다.',
    timetable: [
      { day: '화요일', time: '13:35 ~ 16:15', subject: '웹개발실습', location: '5호관 411호', isCurrent: true },
      { day: '목요일', time: '09:00 ~ 11:45', subject: '사물인터넷실습', location: '4호관 203호', isCurrent: false },
      { day: '목요일', time: '12:40 ~ 15:20', subject: 'RF공학실습', location: '4호관 203호', isCurrent: false },
      { day: '금요일', time: '09:00 ~ 11:45', subject: 'PCB설계실습', location: '4호관 307호', isCurrent: false },
    ],

    hobbies: [
      { title: ' 게임 (LoL)', desc: 'League of Legends 즐기기', img: 'https://cdnweb01.wikitree.co.kr/webdata/editor/202110/14/img_20211014100752_ca875ed5.webp' },
      { title: ' 야구 관람', desc: 'KBO 리그 응원 및 직관', img: 'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/KBOHome/resources/images/common/open_graph_kbo_2022.png' },
      { title: ' 차박 & 드라이브', desc: '국내 여행지 차박 캠핑', img: 'https://cdn.greenpostkorea.co.kr/news/photo/202009/121629_122687_311.jpg' }
    ],
    favoriteFoods: [
      { name: '된장찌개', desc: '어머니의 된장찌개', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXMcFbuLlYTIsrrDbgz_YhhVdTpsp3ThTxwwKUn37McFjHSr8Ey8zbm-sd&s=10' },
      { name: '치킨', desc: '뿌링클', img: 'https://img.danuri.io/catalog-image/947/992/002/5c1f5beb80064faea8d03dad676cef12.jpg' },
      { name: '고기', desc: '삼겹살', img: 'https://i.namu.wiki/i/oFHlYDjoEh8f-cc3lNK9jAemRkbXxNGwUg7XiW5LGS6DF1P2x8GCeNQxbQhVIwtUS1u53YPw-uoyqpmLtrGNJA.webp' }
    ],
    contact: {
      email: '202508081@itc.ac.kr.com',
      github: 'https://github.com/xoyoungrla'
    }
  };

  res.render('index', { profile: profileData });
});

app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
