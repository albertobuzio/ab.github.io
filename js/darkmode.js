var options = {
  bottom: '1em', // default: '32px'
  right: 'unset', // default: '32px'
  left: '1em', // default: 'unset'
  mixColor: '#fefefe', // default: '#fff'
  buttonColorDark: '#121212',  // default: '#100f2c'
  buttonColorLight: '#fff', // default: '#fff'
  saveInCookies: false, // default: true,
  label: '<i class="fas fa-adjust"></i>',
}
const darkmode = new Darkmode(options);
darkmode.showWidget();