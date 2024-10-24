import img1 from "../images/web-dev1.webp";
import img2 from "../images/web-dev2.jpg";
import img3 from "../images/web-dev3.png";
import member1 from "../images/team-1.jpg";
import member2 from "../images/team-2.jpg";
import member3 from "../images/team-3.jpg";
import member4 from "../images/team-4.jpg";

import client1 from ".././images/client1.jpg";
import client2 from ".././images/client2.jpg";
import client3 from ".././images/client3.jpg";
import client4 from ".././images/client4.jpg";


const Sdata = [
    {
        id: 1,
        title: "Web Development",
        description: "1. json を空の Create React App プロジェクトのパブリック ディレクトリに追加します。 React コンポーネントの Fetch API リクエストは常に、このパブリック ディレクトリ内のファイルまたはその他の関連アセットを検索します。",
        imgscr:  img1,
        link: "https://www.facebook.com/"
    },
    {
        id: 2,
        title: "Mobile Development",
        description: "2. json in the public directory of a blank Create React App project. Your React component's Fetch API requests always look for files or other relevant assets in this public directory.",
        imgscr: img2,
        link: "https://www.youtube.com/"
    },
    {
        id: 3,
        title: "IOS Development",
        description: "3. json in the public directory of a blank Create React App project. Your React component's Fetch API requests always look for files or other relevant assets in this public directory.",
        imgscr: img3,
        link: "https://www.yahoo.com/"
    }
]


const TeamData = [
    {
        memberimg: member1,
        name: "Walter White",
        design: "Chief Executive Officer"
    },
    {
        memberimg: member2,
        name: "Sarah Jhonson",
        design: "Product Manager"
    },
    {
        memberimg: member3,
        name: "William Anderson",
        design: "CTO"
    },
    {
        memberimg: member4,
        name: "Amanda Jepson",
        design: "Accountant"
    }
]

const BlogData = [
    {
        id: 1,
        memberimg: member1,
        title: "web development",
        description: "1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ratione repudiandae totam laboriosam, iure veritatis? Ratione sint beatae officiis nemo?"
    },
    {
        id: 2,
        memberimg: member2,
        title: "mobile development",
        description: "1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ratione repudiandae totam laboriosam, iure veritatis? Ratione sint beatae officiis nemo?"
    },
    {
        id: 3,
        memberimg: member3,
        title: "ios development",
        description: "1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ratione repudiandae totam laboriosam, iure veritatis? Ratione sint beatae officiis nemo?"
    }
    
]

const TestimonialData = [
    {
        id: 1,
        memberimg: client1,
        review: "1: “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinarac dapibus leo. Cras cursus facere, numquam ultrica orci optio! Fames, ab alias. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinarac dapibus leo."
    },
    {
        id: 2,
        memberimg: client2,
        review: "2: “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinarac dapibus leo. Cras cursus facere, numquam ultrica orci optio! Fames, ab alias. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinarac dapibus leo."
    },
    {
        id: 3,
        memberimg: client3,
        review: "3: “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinarac dapibus leo. Cras cursus facere, numquam ultrica orci optio! Fames, ab alias. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinarac dapibus leo."
    },
    {
        id: 4,
        memberimg: client4,
        review: "4: “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinarac dapibus leo. Cras cursus facere, numquam ultrica orci optio! Fames, ab alias. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinarac dapibus leo."
    },
    
    
    
]

export  {Sdata, TeamData, BlogData, TestimonialData};