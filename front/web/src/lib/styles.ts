import { makeStyles } from "@material-ui/core/styles";

// A custom theme for this app

interface Props {
  color?: string;
}

export const useStyles = makeStyles(theme => ({
  button: {
    background: (props: Props) =>
      props.color === "red"
        ? "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
        : "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: (props: Props) =>
      props.color === "red"
        ? "0 3px 5px 2px rgba(255, 105, 135, .3)"
        : "0 3px 5px 2px rgba(33, 203, 243, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
    margin: 8
  },

  formCard: {
    padding: "2em 2em",
    backgroundColor: "#f4f4f4",
    display: "flex",
    flexDirection: "column",
    "& > *": {
      padding: "0.25em 0"
    }
  },

  formInputBox: {
    // margin: "0.25em 0"
    // width: "100%"
    minWidth: "20em"
  },

  center: {
    margin: "1em auto",
    padding: "1em 1em",
    maxWidth: "66%"
  },

  countrySelect: {
    minWidth: "8em"
  }
}));

// const border = "#ccc";
// const textColor = "#bbb";
// const raisedBackground = "rgba(255, 255, 255, 0.05);";
// const hoverBackground = "rgba(255, 255, 255, 0.15);";

// export const Button = styled.span`
//   color: ${textColor};
//   border-radius: 0.25em;
//   padding: 0.75em 1em;

//   border: 1px solid ${border};

//   background-color: ${raisedBackground};

//   &:hover {
//     background-color: ${hoverBackground};
//     cursor: pointer;
//   }
// `;

// export const Panel = styled.div`
//   margin: 1em;
//   padding: 0.75em 1em;

//   background-color: ${raisedBackground};
// `;
