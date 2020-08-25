class GitHub{
    constructor(){
        this.client_id='6b500ff8659fab1830e1';
        this.client_secret='bc955af3e382995d66b8624cbc103181acb8d7b9';
        this.repos_count=5;
        this.repos_sort='created:asc'
    }
    async getUser(user){
        const profileResponse=await fetch(`http://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        const repoResponse=await fetch(`http://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile=await profileResponse.json();
        const repos=await repoResponse.json();
        return{
            profile,
            repos

        }
    }
}