class Github{
  constructor() {
    // Find id and secret at GitHub's personal setting >> Developer settings >> OAuth Apps
    this.client_id = '#';
    this.client_secret = '#';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?cliend_id=${this.client_id}&clinet_secret=${this.client_secret}`);

    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&cliend_id=${this.client_id}&clinet_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();

    return { // return a object
      // profile: profileData 
      // you can ignore the latter if two share the same name
      profile,
      repos

    }
  }
}