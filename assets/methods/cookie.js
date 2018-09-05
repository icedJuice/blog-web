const exdays = 1;
const cookies = {
  set: function (key, value) {
    var d = new Date();
    d.setTime(d.getTime()+(exdays*24*60*60*1000));
    var expires = "expires="+d.toGMTString();
    document.cookie = key+"="+value+"; "+expires;
  },

  get: function (arg) {
    if(!arg) return false;
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i=0; i<ca.length; i++) {
      var c = ca[i].trim();
      if (c.indexOf(name)===0) return c.substring(name.length,c.length);
    }
    return '';
  },

  delete: function (arg) {
    if(!arg) return false;
    var str = '';
    var tm = 'expires=Thu, 01 Jan 1970 00:00:00 GMT';
    if(typeof arg === 'string') {
      str = arg + '=; ' + tm;
      document.cookie = str;
    } else if (typeof arg === 'object') {
      for (var item in arg) {
        str = item + '=; ' + tm;
        document.cookie = str;
      }
    }
    str += tm;
    document.cookie = str;
  }
}

export default cookies;
