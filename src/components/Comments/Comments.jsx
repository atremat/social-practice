import React from "react";
import PropTypes from "prop-types";
import { Comment } from "../Comment/Comment";
import { Grid } from "../Grid/Grid";
import { comments } from "../../helpers/comments";
import { selectFilter } from "../../redux/filterSlice";
import { useSelector } from "react-redux";

export const Comments = () => {
  const filterValue = useSelector(selectFilter);

  const filteredComments = comments.filter((comment) =>
    comment.content.toLowerCase().includes(filterValue.toLowerCase().trim())
  );
  return (
    <Grid>
      {comments &&
        filteredComments.map((comment) => (
          <Comment key={comment.id} {...comment} />
        ))}
    </Grid>
  );
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape().isRequired),
};
