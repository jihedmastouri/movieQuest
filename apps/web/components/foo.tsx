import { Button } from 'core-app/components';

export default function Foo() {
  return <Button
    title="this is a text"
    onPress={() => {
      console.log('this is the best thing');
    }}
  />;
}
