import { log } from "util";

export function getFileList(name) {
    const filesMD = require.context(`../../public/markdown`, true, /\.md$/);

    const filesMDNames = filesMD.keys();

    const tmepListDatas = [];
    // console.log(filesMDNames);

    filesMDNames.map((item) => {
        const listObj = {};
        const listItemS = item.split('/');
        // console.log(listItemS);

        if (listItemS.length > 0) {
            listObj.name = listItemS[1];
            if (listObj.name === name) {
                listObj.title = listItemS[2].replace('.md', '');
                listObj.path = item.slice(2);
                listObj.children = [];
                listObj.showChild = false;
                return tmepListDatas.push(listObj);

            }

        }
    });
    
    return tmepListDatas
}
