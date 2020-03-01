export function getFileList(name){
    const filesMD = require.context(`../../public/markdown`, true, /\.md$/);
    
    const filesMDNames = filesMD.keys();
    
    const tmepListDatas = [];
    filesMDNames.map((item) => {
        const listObj = {};
        const listItemS = item.split('/');
        if (listItemS.length > 0) {
            listObj.name = listItemS[1].replace('.md', '');
            listObj.path = item.slice(2);
            listObj.children = [];
            listObj.showChild = false;
        }
        return tmepListDatas.push(listObj);
    });
    let results = []
    tmepListDatas.forEach(i => {
        if(i.name === name){
            results.push(i)
        }
    })
    // console.log("文件列表",name,results);

    return results
}
