type UserResponse = {
    id: number,
    name: string,
    registrationDate: string,
}

type AuthResponse = {
    id: number;
    avatar: string;
    name: string;
    login: string;
    user_token: string;
}

type SomeOtherResponse = {
    field1: string;
    field2: string;
    field3: string;
}

type UserReponseAfterApiRefactoring = {
    data: {
        id: number,
        name: string,
        registrationDate: string,
    },
    meta: { // can be any meta object
        trackId: string,
        trackerUrl: string,
    }
}

type MetaTrackMessage = {
    trackId: string, // айди трекера логирования
    trackerUrl: string, // юрл трекера логирования
}

type LoadMetaMessage = {
    currentNodeId: string, // текущий сервер, с которым установлено соединение
    currentNodeLoad: number // 0-100, текущая загрузка ноды
}

type ApiResponse<T, M> = {
    data: T[],
    meta: M
};

class NewApiProvider {
    public static getUsers(): ApiResponse<UserResponse, MetaTrackMessage> {
        return { 
            data: [ 
                { 
                    "id": 49, 
                    "name": "Kate", 
                    "registrationDate": "2020-08-30 14:17:23" 
                } 
            ], 
            meta: { 
                trackId: "12345", 
                trackerUrl: "http://example.com/12345" 
            } 
        };
    }

    public static auth(): ApiResponse<AuthResponse, MetaTrackMessage> {
        return { 
            data: [ 
                { 
                    id: 124, 
                    avatar: "<http://llss.qiniudn.com/d234b75b6a7dfeda793b7da04a7c080dd.png>", 
                    name: "Johanna", 
                    login: "Johanna206", 
                    user_token: "eYEuVgUlDvRXgHR" 
                } 
            ], 
            meta: { 
                trackId: "12345", 
                trackerUrl: "http://example.com/12345" 
            } 
        };
    }

    public static getSomeOther(): ApiResponse<SomeOtherResponse, LoadMetaMessage> {
        return { 
            data: [ 
                { 
                    "field1": "7pfE0oQFUZJg", 
                    "field2": "rS9bzwuy8qb1U", 
                    "field3": "2vLYGgE" 
                } 
            ], 
            meta: { 
                currentNodeId: "node1", 
                currentNodeLoad: 50 
            } 
        };
    }
}
