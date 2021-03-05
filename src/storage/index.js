const STORAGE_KEY = "mall"

export default {
    //存值
    setItem (key,val,module_name){
        if(module_name){
            let value = this.getItem(module_name)
            value[key] = val
            this.setItem(module_name,value)
        } else {
            let value = this.getStorage()
            value[key] = val
            window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(value))
        }
    },
    getItem (key,module_name){
        if(module_name){
            let val = this.getItem(module_name)
            if(val) return val[key]
        }
        return this.getStorage()[key]
    },
    getStorage (){
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || "{}")
    },
    clear (key,module_name){
        let val = this.getStorage()
        if(module_name){
            if(!val[module_name]) return
            delete val[module_name][key]
        } else {
            delete val[key]
        }
        window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val))
    }
}