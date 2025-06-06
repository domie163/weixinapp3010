const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot70p75/",
            name: "springboot70p75",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot70p75/front/h5/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于微信小程序的大学生科技竞赛管理系统"
        } 
    }
}
export default base
