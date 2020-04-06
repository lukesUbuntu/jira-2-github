export interface GithubIssue {
    url:                string;
    repository_url:     string;
    labels_url:         string;
    comments_url:       string;
    events_url:         string;
    html_url:           string;
    id:                 number;
    node_id:            string;
    number:             number;
    title:              string;
    user:               GithubUser;
    labels:             any[];
    state:              string;
    locked:             boolean;
    assignee:           null;
    assignees:          any[];
    milestone:          null;
    comments:           number;
    created_at:         Date;
    updated_at:         Date;
    closed_at:          null;
    author_association: string;
    body:               string;
}

export interface GithubUser {
    login:               string;
    id:                  number;
    node_id:             string;
    avatar_url:          string;
    gravatar_id:         string;
    url:                 string;
    html_url:            string;
    followers_url:       string;
    following_url:       string;
    gists_url:           string;
    starred_url:         string;
    subscriptions_url:   string;
    organizations_url:   string;
    repos_url:           string;
    events_url:          string;
    received_events_url: string;
    type:                string;
    site_admin:          boolean;
}

export interface CreateGithubIssue {
    title: string;
    body: string;
    assignees?: string[];
    milestone?: number;
    labels?: string[];
}