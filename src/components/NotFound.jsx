import React from 'react';
import './Styles/NotFound.css'


const NotFound = () => {
  return (
    <div id='NotFoundContainer'>
        <div id='NotFoundCompanyLogo'>
            
        </div>
        <div id='NotFoundContent'>
            <h1>404 - الصفحة ليست موجودة مع الأسف</h1>
            <p>نأسف لعدم توفر اي خدمة على هذا الرابط, يمكنك الوصول الى الصفحة الرئيسية عبر هذا <a href="/">الرابط</a>.</p>
        </div>
    </div>
  );
};

export default NotFound;