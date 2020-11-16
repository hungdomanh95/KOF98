var { url } = require('../../config/connectDB');
var mongoose = require('mongoose');
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
var Character = require('./models/character');

var docs = [
 {
   id:0,
   name:"Nakoruru",
   team:"Samurai Shodown",
   intro:"Nakoruru đc sinh ra trong ngôi làng phụng sự thần cổ xưa thuộc Hokkaido. Từ khi còn rất nhỏ, cô đã có khả năng giao tiếp và thấu hiểu tự nhiên, được mọi người biết đến với danh hiệu Người Bảo Hộ Tự Nhiên. Nakoruru là một võ sĩ đến từ tựa game Samurai Showdown cùng với Haohmaru và Ukyo Tachibana. ",
   infor:[
     "Đội: Samurai Showdown",
     "Tư chất: 13 - SR",
     "Thuộc tính: GANK – Kỹ",
     "Đặc tính: Người bảo hộ tự nhiên.",
   ],
   fate:[
     "Cường giả phương xa: Sở hữu Nakoruru, Haohmaru, Ukyo Tachibana. Công tăng 20%.",
     "Em gái đáng yêu: Sở hữu Nakoruru, Athena, Kula, Angel. Công tăng 20%",
     "Thiếu nữ siêu năng lực: Sở hữu Nakoruru, Chizuru, Athena 2002 UM. HP tăng 20%.",
     "Người bảo hộ tự nhiên: Thức tỉnh trang bị Nanh Sói. Vòng Quay Thần Thánh thành MAX. Vòng Quay Thần Thánh.",
     "Vu nữ của Thần: Thức tỉnh huy hiệu Nữ Trang (Beauty Badge). Máu tăng 15%",
     "Bạn của muôn thú: Thức tỉnh sách Thần Lực (Mana Tome). Công tăng 15%",
   ],
   passive1:{
     title:"Cường hóa HP S",
     content:[
       "Tăng cho bản thân 5% HP ở Lv1"
     ]
   },
   passive2:{
    title:"Chúc Phúc Của Rừng Cây",
    content:[
      "Tăng công cho võ sĩ nữ đồng minh.",
      "Khi bị hạ gục, giảm 25% KST và 30% tốc độ hồi nộ của hàng trước phe địch.",
      "Tăng 0.05% công cho võ sĩ nữ phe ta.",
    ]
  },
  skill:{
    title:"Ưng Kích",
    content:[
      "Tấn công một mục tiêu, giải hiệu ứng có lợi của mục tiêu và có 40% tỷ lệ gây choáng.",
    ]
  },
  ultimate:{
    title:"Vòng Quay Thần Thánh",
    content:[
      "Tấn công một hàng dọc địch, gây thêm sát thương dựa theo thủ của mục tiêu. Mục tiêu chính bị giảm 20% KST và đỡ đòn.",
    ]
  },
  thunderElement:[
     "Tấn công một mục tiêu, giải hiệu ứng có lợi của mục tiêu và có 40% tỷ lệ gây choáng. Nếu mục tiêu là người đã trúng tuyệt kỹ của Nakoruru, tỷ lệ làm choáng tăng lên 90%.",
   ],
   waterElement:[
     "Tấn công một hàng dọc địch, gây thêm sát thương dựa theo thủ của mục tiêu. Mục tiêu chính bị giảm 35% KST và đỡ đòn.",
     "Tăng 10% KST cho hàng sau phe ta."
   ],
   strongest:[
     "Dễ thương.",
     "Có giải buff.",
     "Giảm KST hàng trước khi chết, hợp với 1 số chiến thuật.",
   ],
   weakness:[
     "Khó kiếm mảnh",
     "Đi cùng team Samurai.",
   ],
   recommend:"Siêu nữ, Samurai, Hổ Shunei thua uy. "
 },
 {
   id:1,
   name:"Haohmaru",
   team:"Samurai Shodown",
   intro:"Haohmaru trở thành kiếm khách lang thang từ khi còn trẻ, nổi danh cùng thanh kiếm được truyền lại từ mẹ mình. Suốt nhiều năm ròng rã, Haohmaru đã chiến đấu với vô số kẻ mạnh, đánh bại thế lực ma quỷ và tiếp tục lang thang truy cầu cường giả.",
   infor:[
     "Đội: Khách mời – Samurai Showdown",
     "Tư chất: 14 - UR",
     "Thuộc tính: TANK – Vệ",
     "Đặc tính: Túy kiếm sư, kiếm khách đơn độc.",
   ],
   fate:[
     "Nắm đấm và đường gươm: Sở hữu Haohmaru, Ukyo Tachibana, Kyo NESTS, Crazy Iori. HP tăng 25%.",
     "Cường giả phương xa: Sở hữu Haohmaru, Nakoruru, Ukyo Tachibana. HP tăng 25%",
     "Thân thể cường tráng: Sở hữu Haohmaru, Rugal, Geese, Orochi Yashiro, Daimon. Công tăng 25%.",
     "Nhất đao đoạt mạng: Thức tỉnh trang bị . Đế Vương Trảm Phá thành MAX. Đế Vương Trảm Phá.",
     "Huân chương kiếm sĩ: Thức tỉnh huy hiệu Bão Tố (Gale Badge). Máu tăng 15%",
     "Di Thư kiếm sĩ: Thức tỉnh sách Võ Tự Do (Street Fight Tome). Công tăng 15%",
   ],
   passive1:{
     title:"Cường hóa HP SS",
     content:[
       "Tăng cho bản thân 7% HP ở Lv1"
     ]
   },
   passive2:{
    title:"Túy Kiếm Sư",
    content:[
      "Tăng kháng chí mạng và tỷ lệ đỡ đòn của bản thân.",
      "Nếu phe ta có 3 võ sĩ hồn hổ trở lên, tăng cho toàn đội 10% KST trong 2 lượt. Nếu phe ta có 3 võ sĩ hồn rùa trở lên, tăng cho toàn đội 10% ST trong 2 lượt.",
      "Tăng 35% kháng chí mạng và 20% tỷ lệ đỡ đòn ở Lv1",
    ]
  },
  skill:{
    title:"Lốc Kiếm",
    content:[
      "Haohmaru dùng lốc kiếm tấn công một hàng ngang địch, giảm 200 nộ và 30% tỷ lệ chí mạng của mục tiêu trong 1 lượt.",
    ]
  },
  ultimate:{
    title:"Đế Vương Trảm Phá",
    content:[
      "Haohmaru tấn công một mục tiêu địch, gây thêm sát thương bằng 8% máu tối đa của bản thân, bỏ qua đỡ đòn (nội tại Kula, Zero, Omega Rugal vẫn đỡ được), đồng thời giảm 20% tỷ lệ đỡ đòn của mục tiêu.",
    ]
  },
  thunderElement:[
     "Haohmaru dùng lốc kiếm tấn công một hàng ngang địch, giảm 250 nộ và 40% tỷ lệ chí mạng của mục tiêu trong 1 lượt.",
   ],
   waterElement:[
     "Haohmaru tấn công một mục tiêu địch, gây thêm sát thương bằng 15% máu tối đa của bản thân, bỏ qua đỡ đòn và chống cự, đồng thời giảm 30% tỷ lệ đỡ đòn của mục tiêu vĩnh viễn.",
     "Mục tiêu trúng chiêu sẽ bị hiệu ứng 'Chảy máu' (mất 5% máu mỗi lượt, hiệu quả hồi phục giảm 90%) trong 2 lượt.",
     "Haohmaru tiến vào trạng thái 'Hóa hình' trong 2 lượt: Tăng kích thước, tăng 30% công và 30% hút máu trong 2 lượt.",
   ],
   strongest:[
     "Giảm nộ hàng ngang cực khó chịu.",
     "Bổ trợ tốt cho 2 đội hình hổ và rùa khi bổ sung điểm yếu thiếu phòng ngự của hổ và thâm hụt sát thương của rùa.",
     "Bổ trợ tốt cho 2 đội hình hổ và rùa khi bổ sung điểm yếu thiếu phòng ngự của hổ và thâm hụt sát thương của rùa.",
     "Hot pick trong PK liên server.",
   ],
   weakness:[
     "So với các võ sĩ Vệ thông dụng thì Haohmaru không trâu bằng.",
     "Hồn lực bản chất là hổ, tốc độ hồi nộ không thể bằng các võ sĩ Vệ khác.",
   ],
   recommend:"Sáng thế Hổ hoặc Rùa, team Samurai."
 },
];

Character.find({}, function (err, data) {
  if (!data[0]) {
    Character.insertMany(docs);
    console.log("insert Character successful !");
  } else {
    Character.collection.drop();
    Character.insertMany(docs);
    console.log("delete and insert Character successful !");
  }
});