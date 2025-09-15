import React, { Component, memo } from 'react'

type IUser = {
  name: string
  age: number
}

type IProps = {
  user: IUser
}

// functional component + мемоизация
const FirstComponent = memo(({ name, age }: IUser) => (
  <div>
    my name is {name}, my age is {age}
  </div>
))

// functional component + кастомный compareFn (т.к. user пересоздаётся)
const SecondComponent = memo(
  ({ user: { name, age } }: IProps) => (
    <div>
      my name is {name}, my age is {age}
    </div>
  ),
  (prevProps, nextProps) =>
    prevProps.user.name === nextProps.user.name &&
    prevProps.user.age === nextProps.user.age,
)

// class component → PureComponent (поверхностное сравнение)
class ThirdComponent extends React.PureComponent<IUser> {
  render() {
    return (
      <div>
        my name is {this.props.name}, my age is {this.props.age}
      </div>
    )
  }
}

// class component + ручное сравнение пропсов
class FourthComponent extends Component<IProps> {
  shouldComponentUpdate(nextProps: IProps) {
    return (
      this.props.user.name !== nextProps.user.name ||
      this.props.user.age !== nextProps.user.age
    )
  }

  render() {
    return (
      <div>
        my name is {this.props.user.name}, my age is {this.props.user.age}
      </div>
    )
  }
}
