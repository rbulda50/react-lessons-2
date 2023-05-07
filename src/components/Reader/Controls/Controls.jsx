const Controls = ({current, total, onChange}) => {
    return (
        <section>
            <button
                disabled={current === 1}
                type="button"
                onClick={() => { onChange(-1) }}>Назад</button>
            <button
                disabled={current === total}
                type="button"
                onClick={() => { onChange(1) }}>Вперед</button>
        </section>
    );
};

export default Controls;