
export class BlogEntry {
  id = "";
  title  = "";
  content = "";
  tags = [];
  refSelf = "";
  refComments = "";
  dateTime = null;
  permissions = [];
}

export class Blog {
  id = "";
  title = "";
  refOwner = "";
  refSearch = "";
  refTags = "";
  entries = [];
}

export class Comment {
    id = "";
    refEntry = '';
    authorName = '';
    content = '';
}

export class Tag {
    id = '';
    name = '';
}