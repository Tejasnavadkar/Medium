import axios from "axios";
import { atom, atomFamily, selector, selectorFamily } from "recoil";
import { BACKEND_URL } from "../config";

// to get on blog it used becouse of cashing and it placed in store so its not hit api end point every time when component rerender 
export const getBlogPost = atomFamily({
    key:'getBlogPost',
    default:selectorFamily({
        key:'getBlogPostSelectorFamily',
        get: (id:any)=> async ()=>{
            try {
                const response = await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{
                                        headers:{
                                            Authorization:"bearer " + localStorage.getItem('token')
                                        }
                                    })
                return response.data.blog
            } catch (error) {
                console.log("err while fetching blog from family",error)
            }
        }
    })
})

// in compo use useRecoilStateLoadable(getBlogPost(id))


export const getAllBlogs = atom({
    key:'getAllBlogs',
    default:selector({
        key:'getAllBlogsSelect',
        get:async ()=>{
          try {
            const response = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
                headers:{
                    Authorization:"bearer " + localStorage.getItem('token')
                }
            })
            return response.data.allBlogs

          } catch (error) {
            console.log('getAllBlogsRecoil---',error)
          }
        }
    })
})

export const getUsersBlog = atom({
    key:'getUsersBlog',
    default:selector({
        key:'getUsersBlogSelector',
        get:async ()=>{
           try {
            const response = await axios.get(`${BACKEND_URL}/api/v1/blog/userPosts`,{
                headers:{
                    Authorization:"bearer " + localStorage.getItem('token')
                }
            })

            return response.data.userpost
           } catch (error) {

            console.log("Error while getUsersBlogRecoil--",error)
            
           }
        }
    })
})



