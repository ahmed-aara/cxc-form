export function textData
    (
        type: any,
        long_text: any,
        subtitle: any,
        required: any,
        question_text: any,
        subtitle_text: any
    ) {
    return {
        type: type,
        long_text: long_text,
        subtitle: subtitle,
        required: required,
        question_text: question_text,
        subtitle_text: subtitle_text,
    }
}

export function choiceData(
    type: any,
    question_text: any,
    subtitle_text: any,
    options: any,
    other_option: any,
    drop_down: any,
    multiple_answers: any,
    subtitle: any,
    required: any
) {

    return {
        type: type,
        question_text: question_text,
        subtitle_text: subtitle_text,
        options: options,
        other_option: other_option,
        drop_down: drop_down,
        multiple_answers: multiple_answers,
        subtitle: subtitle,
        required: required,
    }

}
