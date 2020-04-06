export interface JiraExport {
    _comment: string[];
    rss:      RSS;
}

export interface RSS {
    _attributes: RSSAttributes;
    channel:     Channel;
}

export interface RSSAttributes {
    version: string;
}

export interface Channel {
    title:        Description;
    link:         Description;
    description:  Description;
    language:     Description;
    issue:        Issue;
    "build-info": BuildInfo;
    item:         Item[];
}

export interface BuildInfo {
    version:        Description;
    "build-number": Description;
    "build-date":   Description;
}

export interface Description {
    _text: string;
}

export interface Issue {
    _attributes: IssueAttributes;
}

export interface IssueAttributes {
    start: string;
    end:   string;
    total: string;
}

export interface Item {
    title:          Description;
    link:           Description;
    project:        Project;
    description:    Attachments;
    environment:    Attachments;
    key:            Key;
    summary:        Description;
    type:           Priority;
    priority:       Priority;
    status:         Status;
    statusCategory: StatusCategory;
    resolution:     Key;
    assignee:       Assignee;
    reporter:       Assignee;
    labels:         Attachments;
    created:        Description;
    updated:        Description;
    due:            Attachments;
    votes:          Description;
    watches:        Description;
    attachments:    Attachments;
    subtasks:       Attachments;
    customfields:   Customfields;
}

export interface Assignee {
    _attributes: AssigneeAttributes;
    _text:       any;
}

export interface AssigneeAttributes {
    username: any;
}



export interface Attachments {
}

export interface Customfields {
    customfield: Customfield[];
}

export interface Customfield {
    _attributes:       CustomfieldAttributes;
    customfieldname:   Description;
    customfieldvalues: Customfieldvalues;
}

export interface CustomfieldAttributes {
    id?:  string;
    key?: string;
}

export interface Customfieldvalues {
    customfieldvalue?: Project;
}

export interface Project {
    _attributes?: CustomfieldAttributes;
    _text:        string;
}

export interface Key {
    _attributes: KeyAttributes;
    _text:       string;
}

export interface KeyAttributes {
    id: string;
}

export interface Priority {
    _attributes: PriorityAttributes;
    _text:       any;
}

export interface PriorityAttributes {
    id:      string;
    iconUrl: string;
}



export interface Status {
    _attributes: StatusAttributes;
    _text:       string;
}

export interface StatusAttributes {
    id:          string;
    iconUrl:     string;
    description: string;
}

export interface StatusCategory {
    _attributes: StatusCategoryAttributes;
}

export interface StatusCategoryAttributes {
    id:        string;
    key:       string;
    colorName: string;
}
