* [angular 11.2.14](https://v11.angular.io/docs)
* [angular workspace](https://angular.io/guide/file-structure)
* [bootstab 4.6.1](https://getbootstrap.com/docs/4.6/getting-started/introduction/)
* [ngx-bootstrap](https://valor-software.com/ngx-bootstrap/old/7.1.2/#/)
* [front-end-theme](https://vsdataentry.pccth.com/front-end-theme/)
* [login page](https://vsdataentry.pccth.com/rd-sso-login-web/)

## setup project
1. git repository

2. install dependency
```
npm install  
```

3. build lib ต้อง build ใหม่ทุกครั้ง ที่มีการแก้ไข lib
```
ng build rd-vatsbtintra-lib
```

หรือ เพิ่ม oprion --watch เพื่อ ไม่ต้อง มาบิวใหม่ทุกครั้ง ที่มีการแก้ไข lib
```
ng build rd-vatsbtintra-lib --watch
```

4. run project ng serve ชื่อ project เช่น
```
ng serve rd-vatsbtde-dln-web 
```

หรือ 
```
ng build rd-vatsbtintra-lib && ng serve rd-vatsbtde-dln-web  
```

หรือ สร้าง script ที่ rd-vatsbtde-web/package.json แล้ว รัน โปรแกรม ผ่าน script
```
npm run start-dln
```

5. setup config css, asset  แก้ไข ไฟล์  rd-vatsbtde-web/package.json แก้ไข ตรง assets ของแต่ล่ะ โปรเจ็ค ให้เพิ่ม
```

{
    "glob": "**/*",
    "input": "projects/rd-vatsbtintra-lib/src/assets",
    "output": "lib-assets"
}
```
 และ "styles": [
```
    "styles": [
        "projects/rd-vatsbtintra-lib/src/styles/font-awesome.css",
        "projects/rd-vatsbtintra-lib/src/styles/fontawesome-svg.css",
        "projects/rd-vatsbtintra-lib/src/styles/material-icons.css",
        "projects/rd-vatsbtintra-lib/src/styles/overide.css",

        "projects/rd-vatsbtintra-lib/src/styles/buttons.scss",
        "projects/rd-vatsbtintra-lib/src/styles/colors.scss",
        "projects/rd-vatsbtintra-lib/src/styles/font.scss",
        "projects/rd-vatsbtintra-lib/src/styles/form.scss",
        "projects/rd-vatsbtintra-lib/src/styles/icons.scss",
        "projects/rd-vatsbtintra-lib/src/styles/line.scss",
        "projects/rd-vatsbtintra-lib/src/styles/modal.scss",
        "projects/rd-vatsbtintra-lib/src/styles/overide.scss",
        "projects/rd-vatsbtintra-lib/src/styles/progress.scss",
        "projects/rd-vatsbtintra-lib/src/styles/shadow.scss",
        "projects/rd-vatsbtintra-lib/src/styles/sidemenu.scss",
        "projects/rd-vatsbtintra-lib/src/styles/table.scss",
        "projects/rd-vatsbtintra-lib/src/styles/tabs.scss"
    ],
    "scripts": [
        "projects/rd-vatsbtintra-lib/src/js/w3.js",
        "projects/rd-vatsbtintra-lib/src/js/bootstrap.min.js",
        "projects/rd-vatsbtintra-lib/src/js/jquery.slim.min.js",
        "projects/rd-vatsbtintra-lib/src/js/popper.min.js",
        "projects/rd-vatsbtintra-lib/src/js/fontawesome-all.min.js",
        "projects/rd-vatsbtintra-lib/src/js/others.js"
    ]
```
ตัวอย่าง วิธีใช้ ให้อ้าง lib-assets/  เป็น path หลัก 
```
 <img src="lib-assets/images/Logo-2021.svg" width="200"  class="d-inline-block align-top pr-3 line-r" alt="">
```

6. การสร้าง sub project ตัวอย่าง สร้าง sub project rd-vatsbtintra-dashboard-web
```
ng generate application rd-vatsbtintra-dashboard-web --routing
```

7. การสร้าง module ตัวอย่าง สร้าง ตัวอย่างสร้าง module entry ใน project rd-vatsbtintra-dashboard-web
```
ng g module modules/entry --project=rd-vatsbtintra-dashboard-web
```

8. การสร้าง component ตัวอย่างสร้าง component example อยู่ใน module entry ใน project rd-vatsbtintra-dashboard-web
```
ng g component modules/entry/example --module modules/entry --project=rd-vatsbtintra-dashboard-web
```

9. การสร้าง service ตัวอย่างสร้าง service example อยู่ใน path /shared/services/example ใน project rd-vatsbtintra-dashboard-web
```
ng g service /shared/services/example --project=rd-vatsbtintra-dashboard-web
```

## bulid Deploy

```
ng build rd-vatsbtintra-lib
ng build rd-vatsbtintra-dashboard-web --base-href=/rd-vatsbtintra-dashboard-web/

```
