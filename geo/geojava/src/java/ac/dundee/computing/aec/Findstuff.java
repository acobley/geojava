package uk.ac.dundee.computing.aec;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.URL;
import java.net.URLConnection;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class Findstuff
 */
@WebServlet("/Findstuff")
public class Findstuff extends HttpServlet {
	private static final long serialVersionUID = 1L;

    /**
     * Default constructor. 
     */
    public Findstuff() {
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String Stuff="pub";
		String loc="56.4583321,-2.9827761";
		String url="http://ajax.googleapis.com/ajax/services/search/local?v=1.0&sll="+loc+"&radius=1&q="+Stuff+"%20loc:"+loc+"&key=AIzaSyBRqkq8vYqlDHjL0-HvxN4OWKk3PVJ-rCg";
        URL google=new URL(url);
        URLConnection yc=null;
        try{
        	 yc = google.openConnection();
        	
        }catch(Exception et)
        {
        	System.out.println("Can't open connection");
        }
        BufferedReader in = new BufferedReader(new InputStreamReader(
                yc.getInputStream()));
        String inputLine;
        String line="";
        while ((inputLine = in.readLine()) != null){ 
        	System.out.println(inputLine);
        	line=line+inputLine;
        }
        in.close();
        PrintWriter out = response.getWriter();
        out.print(line);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

}
