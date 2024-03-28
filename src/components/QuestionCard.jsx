import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function QuestionCard() {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Question 1</CardTitle>
          <CardDescription>Question Text</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Option 1</p>
          <p>Option 2</p>
          <p>Option 3</p>
        </CardContent>
      </Card>
    </>
  );
}
