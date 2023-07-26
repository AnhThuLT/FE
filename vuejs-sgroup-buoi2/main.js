const { createApp } = Vue;

createApp({
	data() {
		return {
			classHidden :'hidden',
			searchQuery: "",
			tableColumns: [
				"user",
				"role",
				"status",
				"last activity",
				"join date",
				"actions",
			],
			userData: [
				{
					id:1,
					name: "John Doe",
					email: "johnDoe@gmail.com",
					avatar: "https://i.pravatar.cc/300",
					role: "admin",
					status: "active",
					lastActivity: "1 min ago",
					joinDate: "2023-06-16T02:56:02.677Z",
					isShowPopup:'hidden'
				},
				{	
					id:2,
					name: "John User",
					email: "johnDoe@gmail.com",
					avatar: "https://i.pravatar.cc/300",
					role: "user",
					status: "suspended",
					lastActivity: "1 min ago",
					joinDate: "2023-06-16T02:56:02.677Z",
					isShowPopup:'hidden'
				},
				{
					id:3,
					name: "John Admin",
					email: "johnDoe@gmail.com",
					avatar: "https://i.pravatar.cc/300",
					role: "admin",
					status: "active",
					lastActivity: "1 min ago",
					joinDate: "2023-06-16T02:56:02.677Z",
					isShowPopup:'hidden'
				},
			],
		};
	},
	// template: {},
	computed: {
		filteredUsers() {
			return this.userData.filter((user) => {
				return (
					user.name
						.toLowerCase()
						.includes(this.searchQuery.toLowerCase()) ||
					user.email
						.toLowerCase()
						.includes(this.searchQuery.toLowerCase())
				);
			});
		},
	},
	methods: {
		addNewUser() {
			const newUser = {
				name: "Yuh Wepo",
				email: "yuhwepo@gmail.com",
				avatar: "https://i.pravatar.cc/300",
				role: "admin",
				status: "active",
				lastActivity: "1 min ago",
				joinDate: new Date(),
			};
			this.userData.push(newUser);
		},
		closeAllPopup(index) {
			// var popups = document.querySelectorAll('td.relative > div');
			// popups.forEach(p => p.style.display = "none");
			this.userData.forEach(u =>{ 
			if(index !== u.id)
			u.isShowPopup = 'hidden'})
		},
		onDelete(id){
			this.filterUser(id);
		},
		filterUser (id){
			this.userData = this.userData.filter(u => u.id !==id)
		},
		showPopup(userid){
			this.closeAllPopup(userid)
			this.userData.map(u=>{
				if(u.id === userid){
					if(u.isShowPopup==='block'){
						u.isShowPopup='hidden'
						
					}else{
						u.isShowPopup='block'
					}
				}
			}
			// this.closeAllPopup()
            //         var popup = document.querySelector("#action-" + id)
            //         if (popup.dataset.display == "none") {
            //             popup.style.display = "block"
            //             popup.dataset.display = "block"
            //         } else {
            //             popup.style.display = "none"
            //             popup.dataset.display = "none"
            //         }
			)
		},
	},
}).mount("#app");
