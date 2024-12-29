import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCheckSquare,
  faCoffee,
  faUser,
  faHome,
  faPhone,
  faMailBulk,
  faBars,
  faCode,
  faFilm,
  faMobileAlt,
  faPenNib,
  faPaintBrush ,
} from '@fortawesome/free-solid-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons'; // استيراد faReact من مكتبة العلامات (brands)

// أضف الأيقونات التي تحتاجها إلى المكتبة
library.add(
  faCheckSquare,
  faCoffee,
  faUser,
  faMailBulk,
  faBars,
  faHome,
  faPhone,
  faReact, // تأكد من استيراد faReact من المكتبة الصحيحة
  faCode,
  faFilm,
  faMobileAlt,
  faPenNib ,
  faPaintBrush ,

);
