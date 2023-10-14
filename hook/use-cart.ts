import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware'; // ตัวกลางเก็บค่า
// create ใช้สำหรับสร้าง state store ใน zustand.
// persist เป็น middleware ที่ทำให้ state ยังอยู่ ตลอดเวลาแม้หน้าเว็บจะโหลดใหม่ เก็บไว้ที่ JSONStorage
// createJSONStorage ที่เก็บ state.
// create สร้าง state => persist ค่าstate (หน้าเว็บโหลดใหม่ค่าstateก็ยังอยู่) =>  ที่เก็บ state storage แบบJsonStorage

import { toast } from 'react-hot-toast';

// โครงสร้าง
interface CartStore {
    items: string[];
    addItem: (data: string | string[]) => void;  // ปรับประเภทของ addItem
    removeItem: (data: string | string[]) => void;
    // removeAll: () => void;
}

//create โครงสร้างตั้งต้น
// create => persisit =>(set,get)
const useCart = create(persist<CartStore>((set, get) => ({

    // => กำหนด items [] เป็นที่เก็บ poke
    items: [],

    // =>additem(data)
    // get items => แล้วเอา data ที่ได้มาเก็บไว้ที่ => 
    addItem: (data: string | string[]) => {
        // ทำการตรวจสอบว่าเป็น string หรือ string[]
        const itemsToAdd = Array.isArray(data) ? data : [data];
        set({ items: [...get().items, ...itemsToAdd] });
        toast.success('Item Added to cart.');
    },

    // รับ name เข้ามา แล้วกรอง ข้อมูลในitems ต้อง !== name ที่รับเข้ามาสร้าง [] ใหม่ ที่ไม่มี name ที่รับเข้ามา
    // แล้ว set Item [] ใหม่
    removeItem: (data: string | string[]) => {
        const itemsToRemove = Array.isArray(data) ? data : [data];

        set(prevState => {
            const updatedItems = prevState.items.filter(item => !itemsToRemove.includes(item));
            return { items: updatedItems };
        });

        toast.success('Items removed from the cart.');
    },
    //removeAll: () => set({ items: [] }), // => set items [] ลบทั้งหมด
}), {
    name: 'ok-storage', // ชือที่เก็บ storage
    storage: createJSONStorage(() => localStorage) // => ให้ข้อมูลเป็น JSON
})
)

export default useCart;