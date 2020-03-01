import Es6Notes from "../views/study/comps/Es6Notes.vue"
import MdNotes from "../views/study/comps/MdNotes.vue"
import VueNotes from "../views/study/comps/VueNotes.vue"

const studyRoutes = [
    
    {
        path:'es6',
        component:Es6Notes
    },
    {
        path:'markdown',
        component:MdNotes
    },
    {
        path:'vue',
        component:VueNotes
    },
    
]
export default studyRoutes