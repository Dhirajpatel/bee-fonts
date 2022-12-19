// import { ContextProviderComponent } from 'cwco';
// //const { ContextProviderComponent } = window;
// //const customElement.define('my-button', BIcons);
// class BIcons extends ContextProviderComponent {
//   static observedAttributes = [
//     'name',
//     'size',
//     'color'
//   ];
//   name = '';
//   size = '16px';
//   color = '#000';

//   get fontSize() {
//     switch (this.size) {
//       case 'xsm':
//         return '10px';
//       case 'sm':
//         return '14px'
//       case 'md':
//         return '16px';
//       case 'lg':
//         return '21px'
//       case 'xlg':
//         return '28px';
//       default:
//         return this.size
//     }
//   }

//   get accent() {
//     switch (this.color) {
//       case 'primary':
//         return '#222';
//       case 'secondary':
//         return '#0982b3'
//       case 'warning':
//         return '#f0cb0c';
//       case 'success':
//         return '#09b209'
//       case 'error':
//         return '#900';
//       default:
//         return this.color
//     }
//   }

//   get stylesheet() {
//     return `
// 			<link href="./src/bicons.css" rel="stylesheet"/>
// 		`
//   }

//   get template() {
//     return `
// 			<i class="bicons-{name} icon"
// 				attr.style.font-size="{this.fontSize}, size"
// 				attr.style.color="{this.accent}, color"
// 				></i>`
//   }
// }

// BIcons.register();

// export class Log {
//   static success(msg: string) {
//     console.log(`%c ${msg}`, 'color: green');
//   }

//   static danger(msg: string) {
//     console.log(`%c ${msg}`, 'color: red');
//   }

//   static info(msg: string) {
//     console.log(`%c ${msg}`, 'color: black; background: yellow');
//   }
// }