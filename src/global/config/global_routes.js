import { 
    LoginView,
    LoginController,

    RegisterView,
    RegisterController,

    DashboardView,
    DashboardController
} from "/src/global/templates/index.template.js";

export default function() {
    return [
        { 
            path: "/global/login", 
            view: LoginView, 
            controller: LoginController 
        },
        { 
            path: "/global/register", 
            view: RegisterView, 
            controller: RegisterController 
        },
        { 
            path: "/global/dashboard", 
            view: DashboardView, 
            controller: DashboardController 
        }
    ];
};