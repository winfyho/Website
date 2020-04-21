
// export function getFileList(fileIndexName) {
//     const filesMD = require.context(`../../public/markdown`, true, /\.md$/);
//     const filesMDNames = filesMD.keys();
//     let pagerData = {};
//     filesMDNames.forEach((item) => {
//         const listItemS = item.split('/');
//         // console.log(listItemS);
//         if (listItemS.length > 2) {

//             const fileName = listItemS[1]

//             if (!pagerData[fileName]) {
//                 pagerData[fileName] = {
//                     fileName: fileName,
//                     list: [{
//                         showChild: listItemS.length > 3 ? true : false,

//                         subFile: listItemS.length > 3 ? listItemS[2] : "",
//                         path: listItemS.length > 3 ? listItemS[3] : listItemS[2],
//                     }]
//                 }
//             } else {
//                 pagerData[fileName].list.push({
//                     showChild: listItemS.length > 3 ? true : false,

//                     subFile: listItemS.length > 3 ? listItemS[2] : '',
//                     path: listItemS.length > 3 ? listItemS[3] : listItemS[2],
//                 })
//             }


//         }

//     })

//     let pagerList = pagerData[fileIndexName].list
//     // console.log("pagerList",fileIndexName, pagerList);

//     let data = {}
//     pagerList.forEach((item, index) => {
//         if (item.showChild) {

//             if (!data[item.subFile]) {
//                 data[item.subFile] = {
//                     index,
//                     title: item.subFile,
//                     path: item.subFile + '/',
//                     showChild: true,
//                     chidren: [{
//                         title: item.path,
//                         parent: item.subFile
//                     }]
//                 }
//             } else {
//                 data[item.path].chidren.push({
//                     title: item.path,
//                     parent: item.subFile
//                 })
//             }
//         } else {
//             let title = item.path.replace(".md", "")
//             data[title] = {
//                 index,
//                 title,
//                 path: item.path,
//                 showChild: false,
//                 chidren: []
//             }
//         }
//     })
//     // console.log(fileIndexName, data);




//     return data
// }

// export function getAllFiles() {
//     const filesMD = require.context(`../../public`, true, /\.md$/);
//     const filesMDNames = filesMD.keys();
//     return  filesMDNames  
// }
