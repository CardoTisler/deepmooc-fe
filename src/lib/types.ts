export interface LeaderboardRow {
	index: number;
	name: string;
	score: number;
	bold: boolean;
}

export interface AssignmentOverview {
	assignmentId: string;
	topic: string;
	title: string;
	deadlineDate: string;
	deadlineTime: string;
	tags: string[];
}

export interface TimelineEventData {
	title: string;
	subTitle: string;
	deadlineTime: string;
	deadlineDate: string;
	timeRemaining: string;
}

export interface CourseOverviewData {
	courseId: number;
	courseName: string;
	courseCode: string;
	leaderboardRows: LeaderboardRow[];
	nextAssignment: AssignmentOverview;
}