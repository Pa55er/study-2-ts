{
    console.clear();

    // 타입 별칭(Type Alias)은 특정 타입이나 인터페이스를 참조할 수 있는 타입 변수를 의미.

    // type Animal = string | number | boolean;
    // let sameple: Animal = 4;
    // console.log(sameple);

    type Animal2 = {
        name: string;
        age: number;
        isLive: boolean;
    };
    let sameple2: Animal2 = {
        name: "dog",
        age: 3,
        isLive: true,
    };
    console.log(sameple2);

    type Region = "KR" | "EN" | "JP";
    let myRegion: Region = "KR";
    console.log(myRegion);

    // readonly
    type User = {
        readonly name: string;
        age: number;
    };
    let member: User = {
        name: "Somy",
        age: 25,
    };
    member.age = 26;
    // member.name = "test";
    console.log(member);

    // & (Intersection)
    type Person1 = {
        name: string;
        age: number;
    };
    type Job = {
        job: string;
    };
    type NewType = Person1 & Job;
    let newMember: NewType = {
        name: "yun",
        age: 26,
        job: "developer",
    };
    console.log(newMember);

    // ? (Optional)
    type Square = {
        width: number;
        heigth: number;
        color?: string;
    };
    let square: Square = {
        width: 100,
        heigth: 100, // 생략
        // color: "red", // 생략
    };

    console.log(square);

    // | (Union)
    type Name1 = string | string[];
    type Age1 = number | number[];
    type NewType1 = Name1 | Age1;
    // string | string[] | number | number[]
    let newOne: NewType1 = ["test"];
    console.log(newOne);

    // 이름, 이메일(옵션), 비밀번호, 주소(옵션), 전화번호
    // 미성년자인지 체크 타입 추가 &
    type User2 = {
        name: string;
        email?: string;
        password: string;
        address?: string;
        phone: string;
    };
    type Adult = {
        adult: boolean;
    };
    type NewUser2 = User2 & Adult;
    let user: NewUser2 = {
        name: "Seokjun",
        //email: "11111@gmail.com",
        password: "1234",
        //address: "korea",
        phone: "000-0000-0000",
        adult: true,
    };
    console.log(user);
}
