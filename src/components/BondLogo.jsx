import { Box, SvgIcon } from "@material-ui/core";

function BondLogo({ bond }) {
  let style = { height: "32px", width: "32px" };

  // Need more space if its an LP token
  /*if (bond.isLP) {
    viewBox = "0 0 64 32";
    style = { height: "32px", width: "62px" };
  }*/

  return (
    <Box display="flex" alignItems="center" justifyContent="center" width={"64px"}>
      <SvgIcon component={bond.bondIconSvg} viewBox={bond.bondIconViewBox} style={style} />
    </Box>
  );
}

export default BondLogo;
