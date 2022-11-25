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

export function dateData(
    type: any,
    question_text: any,
    subtitle_text: any,
    subtitle: any,
    required: any,
) {
    return {
        type: type,
        question_text: question_text,
        subtitle_text: subtitle_text,
        subtitle: subtitle,
        required: required,
    }
}

export function ratingData(
    type: any,
    question_text: any,
    subtitle_text: any,
    level: any,
    symbol: any,
    label_start: any,
    label_end: any,
    label: any,
    subtitle: any,
    required: any,
) {
    return {
        type: type,
        question_text: question_text,
        subtitle_text: subtitle_text,
        level: level,
        symbol: symbol,
        label_start: label_start,
        label_end: label_end,
        label: label,
        subtitle: subtitle,
        required: required
    }
}

export function npsData(
    type: any,
    question_text: any,
    subtitle_text: any,
    bad_text: any,
    good_text: any,
    subtitle: any,
    required: any,
) {
    return {
        type: type,
        question_text: question_text,
        subtitle_text: subtitle_text,
        bad_text: bad_text,
        good_text: good_text,
        subtitle: subtitle,
        required: required
    }
}
