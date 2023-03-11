export interface LeaderboardRow {
	index: number;
	name: string;
	score: number;
	bold: boolean;
}

export interface AssignmentOverview {
	assignmentId: number;
	topic: string;
	title: string;
	deadlineDate: string;
	deadlineTime: string;
	tags: string[];
	completed: boolean;
}

export interface TimelineEventData {
	title: string;
	subTitle: string;
	deadlineTime: string;
	deadlineDate: string;
	timeRemaining: string;
	tags: string[];
}

export interface CourseOverviewData {
	courseId: number;
	courseName: string;
	courseCode: string;
	leaderboardRows: LeaderboardRow[];
	nextAssignment: AssignmentOverview;
}

export interface CoursePageData {
	courseName: string;
	courseCode: string;
	topicsList: CourseTopicData[];
}

export interface CourseTopicData {
	topicTitle: string;
	topicDescription: string;
	assignments: AssignmentOverview[];
}

export interface Task {
    index: number;
    description: string;
}

export interface AssignmentDetails {
	title: string;
	topic: string;
	tasks: Task[]
}
