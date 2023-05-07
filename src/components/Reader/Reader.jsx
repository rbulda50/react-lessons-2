import { Component } from "react";
import Controls from "./Controls/Controls";
import Progress from "./Progress/Progress";
import Publication from './Publication/Publication';

const LS_KEY = 'reader_item_index';


export default class Reader extends Component {
    state = {
        index: 0,
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.index !== this.state.index) {
            localStorage.setItem(LS_KEY, this.state.index)
        }
    };

    componentDidMount() {
        if (localStorage.getItem(LS_KEY)) {
        this.setState({index: Number(localStorage.getItem(LS_KEY))})
        };
    };

    changeIndex = (value) => {
        this.setState(prevState => ({ index: prevState.index + value }))
    };

    render() {
        const { index } = this.state;
        const { items } = this.props;
        const activePublication = items[index];
        const totalItems = items.length;

        return (
            <div>
                <Controls
                    current={index + 1}
                    total={totalItems}
                    onChange={this.changeIndex} />

                <Progress
                    current={index + 1}
                    total={totalItems} />

                <Publication
                    text={activePublication.text}
                    title={activePublication.title} />
        </div>
    )
}
}