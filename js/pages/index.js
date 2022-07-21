/* Fetch Videos */

// So yeah - this large chunk of code is broken
// function fetchLatestVideo() {
//     fetch("https://www.youtube.com/feeds/videos.xml?channel_id=UCewMTclBJZPaNEfbf-qYMGA")
//     .then(response => response.text())
//     .then(data => {
//         const parser = new DOMParser();
//         const xml = parser.parseFromString(data, "application/xml");
//         console.log(xml)
//     })
//     .catch(console.error)
//     // WITH HEADERS V
//     var url = "https://www.youtube.com/feeds/videos.xml?channel_id=UCewMTclBJZPaNEfbf-qYMGA";

//     var xhr = new XMLHttpRequest();
//     xhr.open("OPTIONS", url);

//     xhr.setRequestHeader("Origin", "http://localhost:8000");
//     xhr.setRequestHeader("Access-Control-Request-Method", "POST");
//     xhr.setRequestHeader("Access-Control-Request-Headers", "Content-Type, Authorization");

//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4) {
//             console.log(xhr.status);
//             console.log(xhr.responseText);
//         }
//     };

//     xhr.send();
// }

// fetchLatestVideo()

/* Redirects */
// Channel page
function info_jsal(){window.location = '/pages/channel_info/jsal'}
function info_jsas(){window.location = '/pages/channel_info/jsas'}
function info_jmw(){window.location = '/pages/channel_info/jmw'}
function info_jsag(){window.location = '/pages/channel_info/jsag'}
function info_tb420(){window.location = '/pages/channel_info/tb420'}
function info_jsapup(){window.location = '/pages/channel_info/jsapup'}
function info_rickx(){window.location = '/pages/channel_info/rickx'}
function info_epic(){window.location = '/pages/channel_info/epic'}
function info_jsac(){window.location = '/pages/channel_info/jsac'}
function info_i(){window.location = '/pages/channel_info/i'}
function info_jsae(){window.location = '/pages/channel_info/jsae'}
function info_ssoas(){window.location = '/pages/channel_info/ssoas'}
function info_ssoa(){window.location = '/pages/channel_info/ssoa'}
function info_ejsafc(){window.location = '/pages/channel_info/ejsafc'}
function info_oldjmw(){window.location = '/pages/channel_info/oldjmw'}

// Subscriber count
function sc_jsal(){window.location = '/pages/sub_count/jsal'}
function sc_jsas(){window.location = '/pages/sub_count/jsas'}
function sc_jmw(){window.location = '/pages/sub_count/jmw'}
function sc_jsag(){window.location = '/pages/sub_count/jsag'}
function sc_tb420(){window.location = '/pages/sub_count/tb420'}
function sc_jsapup(){window.location = '/pages/sub_count/jsapup'}
function sc_rickx(){window.location = '/pages/sub_count/rickx'}
function sc_epic(){window.location = '/pages/sub_count/epic'}
function sc_jsac(){window.location = '/pages/sub_count/jsac'}
function sc_i(){window.location = '/pages/sub_count/i'}
function sc_jsae(){window.location = '/pages/sub_count/jsae'}
function sc_ssoas(){window.location = '/pages/sub_count/ssoas'}
function sc_ssoa(){window.location = '/pages/sub_count/ssoa'}
function sc_ejsafc(){window.location = '/pages/sub_count/ejsafc'}
function sc_oldjmw(){window.location = '/pages/sub_count/oldjmw'}

// View count
function vc_jsal(){window.location = '/pages/view_count/jsal'}
function vc_jsas(){window.location = '/pages/view_count/jsas'}
function vc_jmw(){window.location = '/pages/view_count/jmw'}
function vc_jsag(){window.location = '/pages/view_count/jsag'}
function vc_tb420(){window.location = '/pages/view_count/tb420'}
function vc_jsapup(){window.location = '/pages/view_count/jsapup'}
function vc_rickx(){window.location = '/pages/view_count/rickx'}
function vc_epic(){window.location = '/pages/view_count/epic'}
function vc_jsac(){window.location = '/pages/view_count/jsac'}
function vc_i(){window.location = '/pages/view_count/i'}
function vc_jsae(){window.location = '/pages/view_count/jsae'}
function vc_ssoas(){window.location = '/pages/view_count/ssoas'}
function vc_ssoa(){window.location = '/pages/view_count/ssoa'}
function vc_ejsafc(){window.location = '/pages/view_count/ejsafc'}
function vc_oldjmw(){window.location = '/pages/view_count/oldjmw'}
