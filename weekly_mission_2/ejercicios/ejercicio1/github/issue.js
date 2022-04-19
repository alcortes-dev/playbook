const issue = {
  name: "Nombre del Issue",
  created: "2022-04-02",
  issue_status: "open",
  author: "alcortes",
  content: "........",
  tags: ["tag 1", "tag2", "Tag 3"],
  comments: ["Comentario dentro del issue 1", "Felicidades por el avance."],
  get totalComments(){
    return this.comments.length;
  },
  get totalTags(){
    return this.tags.length;
  }
}

console.log(issue);
console.log(issue.totalComments);
console.log(issue.totalTags);
