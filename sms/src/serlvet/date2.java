package serlvet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.jasper.tagplugins.jstl.core.Out;
import org.omg.CORBA.PUBLIC_MEMBER;

import net.sf.json.JSONObject;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.util.HashMap;
import java.util.Map;
/**
 * Servlet implementation class date2
 */
public class date2 extends HttpServlet {
	private static final long serialVersionUID = 1L;
	 public static final String DEF_CHATSET = "UTF-8";
	    public static final int DEF_CONN_TIMEOUT = 30000;
	    public static final int DEF_READ_TIMEOUT = 30000;
	    public static String userAgent =  "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.66 Safari/537.36";
	 
	    //�����������KEY
	    public static final String APPKEY ="fdcebfc134881574b100023be2c193de";
	 
	   
	    //1.�¼��б�
	    public static JSONObject getRequest1(String mouth,String day){
	        String result =null;
	        JSONObject object=null;
	        String url ="http://api.juheapi.com/japi/toh";//����ӿڵ�ַ
	        Map params = new HashMap();//�������
	            params.put("key",APPKEY);//Ӧ��APPKEY(Ӧ����ϸҳ��ѯ)
	            params.put("v","1.0");//�汾����ǰ��1.0
	            params.put("month",mouth);//�·ݣ��磺10
	            params.put("day",day);//�գ��磺1
	 
	        try {
	            result =net(url, params, "GET");
	            object = JSONObject.fromObject(result);
	            if(object.getInt("error_code")==0){
	            	System.out.println("obj��ֵ"+object);
	            	
	               // System.out.println(object.get("result"));
	            }else{
	                System.out.println(object.get("error_code")+":"+object.get("reason"));
	            }
	        } catch (Exception e) {
	            e.printStackTrace();
	        }
	        return object;
	    }
	 
	    //2.����ID��ѯ�¼�����
	  /*  public static void getRequest2(){
	        String result =null;
	        String url ="http://api.juheapi.com/japi/tohdet";//����ӿڵ�ַ
	        Map params = new HashMap();//�������
	            params.put("key",APPKEY);//Ӧ��APPKEY(Ӧ����ϸҳ��ѯ)
	            params.put("v","");//�汾����ǰ��1.0
	            params.put("id","");//�¼�ID
	 
	        try {
	            result =net(url, params, "GET");
	            JSONObject object = JSONObject.fromObject(result);
	            if(object.getInt("error_code")==0){
	                System.out.println(object.get("result"));
	            }else{
	                System.out.println(object.get("error_code")+":"+object.get("reason"));
	            }
	        } catch (Exception e) {
	            e.printStackTrace();
	        }
	    }*/
	 
	 
	 
	    public static void main(String[] args) {
	    	System.out.println("������");
	    	
	    }
	 
	    /**
	     *
	     * @param strUrl �����ַ
	     * @param params �������
	     * @param method ���󷽷�
	     * @return  ���������ַ���
	     * @throws Exception
	     */
	    public static String net(String strUrl, Map params,String method) throws Exception {
	        HttpURLConnection conn = null;
	        BufferedReader reader = null;
	        String rs = null;
	        try {
	            StringBuffer sb = new StringBuffer();
	            if(method==null || method.equals("GET")){
	                strUrl = strUrl+"?"+urlencode(params);
	            }
	            URL url = new URL(strUrl);
	            conn = (HttpURLConnection) url.openConnection();
	            if(method==null || method.equals("GET")){
	                conn.setRequestMethod("GET");
	            }else{
	                conn.setRequestMethod("POST");
	                conn.setDoOutput(true);
	            }
	            conn.setRequestProperty("User-agent", userAgent);
	            conn.setUseCaches(false);
	            conn.setConnectTimeout(DEF_CONN_TIMEOUT);
	            conn.setReadTimeout(DEF_READ_TIMEOUT);
	            conn.setInstanceFollowRedirects(false);
	            conn.connect();
	            if (params!= null && method.equals("POST")) {
	                try {
	                    DataOutputStream out = new DataOutputStream(conn.getOutputStream());
	                        out.writeBytes(urlencode(params));
	                } catch (Exception e) {
	                    // TODO: handle exception
	                }
	            }
	            InputStream is = conn.getInputStream();
	            reader = new BufferedReader(new InputStreamReader(is, DEF_CHATSET));
	            String strRead = null;
	            while ((strRead = reader.readLine()) != null) {
	                sb.append(strRead);
	            }
	            rs = sb.toString();
	        } catch (IOException e) {
	            e.printStackTrace();
	        } finally {
	            if (reader != null) {
	                reader.close();
	            }
	            if (conn != null) {
	                conn.disconnect();
	            }
	        }
	        return rs;
	    }
	 
	    //��map��תΪ���������
	    public static String urlencode(Map<String,Object>data) {
	        StringBuilder sb = new StringBuilder();
	        for (Map.Entry i : data.entrySet()) {
	            try {
	                sb.append(i.getKey()).append("=").append(URLEncoder.encode(i.getValue()+"","UTF-8")).append("&");
	            } catch (UnsupportedEncodingException e) {
	                e.printStackTrace();
	            }
	        }
	       // System.out.println("�������������"+sb.toString());//������������ݵ�ַ
	        return sb.toString();
	    }
    /**
     * @see HttpServlet#HttpServlet()
     */
    public date2() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.setContentType("text/html;charset=utf-8");
		PrintWriter out = response.getWriter();
		System.out.println("��post��");
		String mouth=request.getParameter("mouth");
		String day=request.getParameter("day");
		//System.out.println(mouth+","+day);
		  JSONObject object=getRequest1(mouth,day);
		out.println(object);
		out.flush();
		out.close();
	}

}
